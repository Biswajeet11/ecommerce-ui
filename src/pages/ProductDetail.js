import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../component/product";
import CommentForm from "../component/CommentForm";
import Comment from "../component/Comment";
import UseProduct from "../hooks/useProduct";
import { url } from "../constants/url";
import { getComments ,createComment} from "../data/commentsData";


const ProductDetail = () => {
  const [commentsData, setComments] = useState([]);
  const rootComments = commentsData.filter((comment) => comment.parentId === null || comment.parentId === undefined);

  const getReplies = (commentId) => {
    return commentsData.filter((comment) => comment.parentId === commentId).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }


  const { productId } = useParams();
  const { productData, isLoading, error } = UseProduct(url, productId, "");

  useEffect(() => {
    getComments().then((data) => {
      setComments(data);
    });
  }, []);



  const addComment = (text, parentId) => {
    createComment(text, parentId).then((c) => {
      setComments([c,...commentsData]);
    })
    
  }

  const updateComment = (text, id) => {

  }
  const deleteComment = (id) => {

  }
  console.log("@@@@commentsData",commentsData);

  return (
    <div>
      <h1>Product Details</h1>
      {isLoading ? (
        "isLoading"
      ) : (
        <div>
          <Product data={{ ...productData }} />
          <h1>Comments:</h1>
          <CommentForm  handleSubmit ={addComment}/>
          {rootComments.map((rootComment) => {
            console.log("comment data", getReplies(rootComment.id))
            return (
              <Comment key={rootComment.id}
                comment={rootComment}
                replies={getReplies(rootComment.id)}
                currentUser="1"
                addComment={addComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
