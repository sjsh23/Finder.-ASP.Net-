namespace FinderWithReactnASP.Models
{
    public class Accommodation
    {
        public int AccommodationId { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public double Price { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<Rating> Ratings { get; set; }
    }

}
