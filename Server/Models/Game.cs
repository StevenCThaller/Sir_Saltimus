using System;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Game
    {
        [Key]
        public int GameId { get; set; }

        [Required]
        public string Title { get; set; }

        public string ShortenedTitle { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        public string PurchaseLink { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}