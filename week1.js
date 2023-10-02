fetch("https://jsonplaceholder.typicode.com/todos?title" {
  method: 'DELETE',
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete the to-do item');
    }
    console.log('To-do item deleted successfully');
  })
  .catch(error => console.error(error));
 