import React from 'react'

const AddProduct = () => {
    return (
        <div><div class="container">
            <h2>Vertical (basic) form</h2>
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div class="form-group">
                    <label for="comment">Comment:</label>
                    <textarea class="form-control" rows="5" id="comment"></textarea>
                </div>

                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div></div>
    )
}

export default AddProduct