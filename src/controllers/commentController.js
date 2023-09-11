import commentService from "../services/comment.service.js";

async function publishComment(req, res) {
    const { postId } = req.params;
    const { content } = req.body;
    const { userId } = res.locals;

    const comment = await commentService.publishComment({ postId, content, userId });

    res.status(201).send(comment.rows[0]);
}

async function getCommentsByPostId(req, res) {
    const { postId } = req.params;
    const { userId } = res.locals;

    const comments = await commentService.getCommentsByPostId(postId, userId);
    
    res.send(comments.rows);
}

const commentController = { publishComment, getCommentsByPostId };
export default commentController;