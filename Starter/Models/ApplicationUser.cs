using Microsoft.AspNetCore.Identity;

namespace Starter.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string CompanyName { get; set; }
        public string CountryCode { get; set; }
        public string CountryName { get; set; }
        public string VAT { get; set; }
        public string Label { get; set; }
    }
}