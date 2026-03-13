<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="TesarstviJihlava.Default" %>
  <!DOCTYPE html>
  <html lang="cs">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
      <%= PageTitle %>
    </title>
    <link rel="stylesheet" href="https://unpkg.com/@fluentui/web-components/dist/fast-element.min.css">
    <link rel="stylesheet" href="https://unpkg.com/@fluentui/web-components/dist/fluent-design-system.css">
    <script type="module" src="https://unpkg.com/@fluentui/web-components/dist/index.js"></script>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        background-image:
          repeating-linear-gradient(90deg,
            rgba(162, 91, 0, 0.03) 0px,
            rgba(162, 91, 0, 0.05) 2px,
            rgba(162, 91, 0, 0.02) 4px,
            rgba(162, 91, 0, 0.04) 6px,
            rgba(162, 91, 0, 0.03) 8px),
          repeating-linear-gradient(0deg,
            rgba(139, 69, 19, 0.02) 0px,
            rgba(139, 69, 19, 0.03) 1px,
            transparent 2px,
            transparent 3px),
          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><defs><pattern id="wood" patternUnits="userSpaceOnUse" width="100" height="100"><rect fill="%23f4f4f4" width="100" height="100"/><path d="M0,20 Q25,15 50,20 T100,20" stroke="%23a25b0015" stroke-width="0.5" fill="none"/><path d="M0,40 Q25,35 50,40 T100,40" stroke="%23a25b0010" stroke-width="0.5" fill="none"/><path d="M0,60 Q25,55 50,60 T100,60" stroke="%23a25b0015" stroke-width="0.5" fill="none"/><path d="M0,80 Q25,75 50,80 T100,80" stroke="%238b451310" stroke-width="0.5" fill="none"/><circle cx="15" cy="25" r="1.5" fill="%23a25b0008"/><circle cx="35" cy="45" r="1" fill="%23a25b0010"/><circle cx="65" cy="55" r="1.5" fill="%238b451308"/><circle cx="85" cy="75" r="1" fill="%23a25b0008"/></pattern></defs><rect fill="url(%23wood)" width="100" height="100"/></svg>');
        background-attachment: fixed;
        color: #333;
      }

      header {
        background-color: #ffffff;
        color: #a25b00;
        padding: 30px 20px;
        text-align: center;
        border-bottom: 2px solid #a25b00;
      }

      header img {
        max-width: 150px;
        height: auto;
        margin-bottom: 15px;
      }

      header h1 {
        font-size: 2.5em;
        margin: 0;
        font-weight: 600;
      }

      .container {
        width: 90%;
        max-width: 900px;
        margin: 30px auto;
        padding: 30px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .contact-section {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .contact-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        background-color: #f9f9f9;
        border-radius: 6px;
        border-left: 4px solid #a25b00;
      }

      .contact-icon {
        font-size: 24px;
        color: #a25b00;
      }

      .contact-info {
        display: flex;
        flex-direction: column;
      }

      .contact-label {
        font-size: 0.9em;
        color: #666;
        font-weight: 500;
      }

      .contact-value {
        font-size: 1.1em;
        color: #333;
        font-weight: 600;
      }

      .contact-value a {
        color: #a25b00;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .contact-value a:hover {
        color: #d47a2a;
      }

      fluent-card {
        margin-bottom: 20px;
      }

      .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }

      .info-item {
        padding: 15px;
        background-color: #f9f9f9;
        border-radius: 6px;
        border-left: 4px solid #a25b00;
      }

      .info-item-label {
        font-size: 0.85em;
        color: #666;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .info-item-value {
        font-size: 1em;
        color: #333;
        font-weight: 600;
        margin-top: 5px;
      }

      .address-section {
        grid-column: 1 / -1;
      }

      .button-group {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        flex-wrap: wrap;
      }

      footer {
        text-align: center;
        padding: 20px;
        background-color: #a25b00;
        color: white;
        margin-top: 40px;
        font-size: 0.9em;
      }

      @media (max-width: 600px) {
        header {
          padding: 20px 15px;
        }

        header h1 {
          font-size: 1.8em;
        }

        header img {
          max-width: 100px;
        }

        .container {
          padding: 20px;
          margin: 20px auto;
        }

        .button-group {
          flex-direction: column;
        }

        .button-group fluent-button {
          width: 100%;
        }

        .info-grid {
          grid-template-columns: 1fr;
        }

        .address-section {
          grid-column: auto;
        }
      }
    </style>
  </head>

  <body>
    <header>
      <h1>
        <%= Server.HtmlEncode(SiteTitle) %>
      </h1>
      <img src="<%= Server.HtmlEncode(LogoPath) %>" alt="Logo Tesařství Jihlava">
    </header>
    <div class="container">
      <fluent-card>
        <div style="padding: 20px;">
          <h2 style="color: #a25b00; margin-top: 0; margin-bottom: 25px; font-size: 1.8em;">Kontaktní údaje</h2>

          <div class="contact-section">
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div class="contact-info">
                <div class="contact-label">Email</div>
                <div class="contact-value"><a href="mailto:<%= Server.HtmlEncode(Email) %>">
                    <%= Server.HtmlEncode(Email) %>
                  </a></div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div class="contact-info">
                <div class="contact-label">Mobilní telefon</div>
                <div class="contact-value"><a href="tel:<%= Server.HtmlEncode(PhoneHref) %>">
                    <%= Server.HtmlEncode(PhoneDisplay) %>
                  </a></div>
              </div>
            </div>
          </div>

          <!-- <div class="button-group">
          <fluent-button appearance="primary" onclick="window.location.href='mailto:info@tesarstvi-jihlava.cz'" onkeydown="if(event.key==='Enter'||event.key===' ')window.location.href='mailto:info@tesarstvi-jihlava.cz'">
            Napsat e-mail
          </fluent-button>
          <fluent-button appearance="outline" onclick="window.location.href='tel:+420603176612'" onkeydown="if(event.key==='Enter'||event.key===' ')window.location.href='tel:+420603176612'">
            Zavolat
          </fluent-button>
        </div> -->
        </div>
      </fluent-card>
      <fluent-card>
        <div style="padding: 20px;">
          <h2 style="color: #a25b00; margin-top: 0; margin-bottom: 25px; font-size: 1.8em;">Údaje o firmě</h2>

          <div class="info-grid">
            <div class="info-item">
              <div class="info-item-label">Jméno vlastníka</div>
              <div class="info-item-value">
                <%= Server.HtmlEncode(OwnerName) %>
              </div>
            </div>

            <div class="info-item">
              <div class="info-item-label">Právní forma</div>
              <div class="info-item-value">
                <%= Server.HtmlEncode(LegalForm) %>
              </div>
            </div>

            <div class="info-item">
              <div class="info-item-label">IČO</div>
              <div class="info-item-value">
                <%= Server.HtmlEncode(ICO) %>
              </div>
            </div>

            <div class="info-item">
              <div class="info-item-label">DIČ</div>
              <div class="info-item-value">
                <%= Server.HtmlEncode(DIC) %>
              </div>
            </div>

            <div class="info-item address-section">
              <div class="info-item-label">Sídlo firmy</div>
              <div class="info-item-value">
                <%= Server.HtmlEncode(AddressLine1) %><br>
                  <%= Server.HtmlEncode(AddressLine2) %>
              </div>
            </div>
          </div>
        </div>
      </fluent-card>
    </div>
    <footer>
      <p>&copy; 2026 Tesařství Jihlava</p>
    </footer>
  </body>

  </html>