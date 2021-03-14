using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Reply
    {
        [Key]
        public int ReplyId { get; set; }

        [Required]
        public string Content { get; set; }
        
        [Required]
        public int ReplyCreatorId { get; set; }
        public User ReplyCreator { get; set; }

        [Required]
        public int RepliedToId { get; set; }
        public Post RepliedTo { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}