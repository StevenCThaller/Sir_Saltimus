using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class PostReaction
    {
        [Key]
        public int PostReactionId { get; set; }

        [Required]
        public int PostId { get; set; }
        public Post Post { get; set; }
        
        [Required]
        public int ReactorId { get; set; }
        public User Reactor { get; set; }

        [Required]
        public string Reaction { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}