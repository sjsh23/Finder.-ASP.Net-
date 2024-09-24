namespace FinderWithReactnASP.Models
{
    public class Rating
    {
        public int RatingId { get; set; }
        public int Stars { get; set; }
        public string Comment { get; set; }
        public int AccommodationId { get; set; }
        public Accommodation Accommodation { get; set; }
    }

}
