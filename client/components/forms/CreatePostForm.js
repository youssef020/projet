import { Avatar } from "antd";
const CreatePostForm = ({content,setContent,postSubmit}) => {
    return (
        <div className="card">
            <div className="card-body pb-1">
                <form className="form-group">
                    <textarea
                     value={content}
                    onChange={(e)=>setContent(e.target.value)}
                    className="form-control" placeholder="write something here">

                    </textarea>
                </form>

            </div>
            <div className="card-footer">
                <button onClick={postSubmit} className="btn btn-sm btn-primary">Post</button>


            </div>

        </div>
    )
}
export default CreatePostForm 