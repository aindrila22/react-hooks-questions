import React from "react";

const pendingQ = () => {
  return (
    <div>
      <div>
        Question: You are developing a chat application. Implement a feature to
        manage chat messages using the useState hook. The feature should allow
        users to send and receive messages, as well as display the chat history.
        Additionally, provide a count of the total number of messages. 
        
        Hints:
        Use an array to store the chat messages, where each message is an object
        with properties like id, content, and sender. Use the useState hook to
        manage the message state. Create functions to send messages, receive
        messages, and calculate the count of messages.
      </div>

      <div>
        Question: You are developing a social media application. Implement a
        feature to manage user posts using the useState hook. The feature should
        allow users to create posts, edit posts, and delete posts. Additionally,
        provide a count of the total number of posts and display all the posts.

        Hints: Use an array to store the posts, where each post is an object
        with properties like id, content, and author. Use the useState hook to
        manage the post state. Create functions to create posts, edit posts,
        delete posts, and calculate the count of posts.
      </div>
      <div>
        Question: You are building a photo gallery application. Implement a
        feature to display and manage favorite photos using the useState hook.
        The feature should allow users to mark photos as favorites, view a list
        of favorite photos, and remove photos from the favorites list.
        Additionally, provide a count of the total number of favorite photos.


        Hints: Use an array to store the favorite photos, where each photo is an
        object with properties like id, title, and imageURL. Use the useState
        hook to manage the favorite photos state. Create functions to add photos
        to favorites, remove photos from favorites, and calculate the count of
        favorite photos.
      </div>
      <div>
        Question: You are working on a task management application. Implement a
        feature to manage tasks using the useState hook. The feature should
        allow users to add tasks, mark tasks as complete, and filter tasks based
        on their completion status. Additionally, provide a feature to delete
        tasks from the list. 
        
        Hints: Use an array to store the tasks, where each
        task is an object with properties like id, description, and completed.
        Use the useState hook to manage the task state. Create functions to add
        tasks, mark tasks as complete, delete tasks, and filter tasks based on
        completion status.
      </div>
    </div>
  );
};

export default pendingQ;
