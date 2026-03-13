using System;
using System.Web.UI;

namespace TesarstviJihlava
{
  public partial class Default : Page
  {
    // Public properties accessible from ASPX page
    public string PageTitle { get; private set; }
    public string SiteTitle { get; private set; }
    public string LogoPath { get; private set; }
    public string Email { get; private set; }
    public string PhoneDisplay { get; private set; }
    public string PhoneHref { get; private set; }
    public string OwnerName { get; private set; }
    public string LegalForm { get; private set; }
    public string ICO { get; private set; }
    public string DIC { get; private set; }
    public string AddressLine1 { get; private set; }
    public string AddressLine2 { get; private set; }

    protected void Page_Load(object sender, EventArgs e)
    {
      // Initialize all properties
      PageTitle = "Tesařství Jihlava";
      SiteTitle = "Tesařství Jihlava";
      LogoPath = "img/svg/tesarstvi-jihlava.svg";
      Email = "info@tesarstvi-jihlava.cz";
      PhoneDisplay = "+420 603 176 612";
      PhoneHref = "+420603176612";
      OwnerName = "Štěpán Kvasnička";
      LegalForm = "Fyzická osoba";
      ICO = "01992201";
      DIC = "CZ9408064710";
      AddressLine1 = "Telečská 2746/96";
      AddressLine2 = "586 01 Jihlava";
    }
  }
}
