using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Post
    {
        [Key]
        public int PostId { get; set; }

        [Required]
        public string Content { get; set; }
        
        [Required]
        public int PostCreatorId { get; set; }
        public User PostCreator { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}