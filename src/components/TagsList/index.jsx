


function TagsList({ tags }) {
    return (
      <ul className="Tags" >
        {tags.map((tag, index) => (
          <li className='Tags-style' key={index}>{tag}</li>
        ))}
      </ul>
    );
  }

  export default TagsList