<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:ns="https://ehof17.github.io/XML">
  
  <!-- Output HTML with indentation -->
  <xsl:output method="html" indent="yes"/>

  <!-- Match the root node. The root element is ns:Hotels because of the default namespace -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Hotels Directory</title>
        <style>
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <h1>Hotels Directory</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone(s)</th>
            <th>Address</th>
            <th>Rating</th>
          </tr>
          <!-- Loop through each Hotel element -->
          <xsl:for-each select="//ns:Hotel">
            <tr>
              <td>
                <xsl:value-of select="ns:Name"/>
              </td>
              <td>
                <xsl:for-each select="ns:Phone">
                  <div><xsl:value-of select="."/></div>
                </xsl:for-each>
              </td>
              <td>
                <div>
                  <strong>Number:</strong> <xsl:value-of select="ns:Address/ns:Number"/><br/>
                  <strong>Street:</strong> <xsl:value-of select="ns:Address/ns:Street"/><br/>
                  <strong>City:</strong> <xsl:value-of select="ns:Address/ns:City"/><br/>
                  <strong>State:</strong> <xsl:value-of select="ns:Address/ns:State"/><br/>
                  <strong>Zip:</strong> <xsl:value-of select="ns:Address/ns:Zip"/><br/>
                  <strong>Nearest Airport:</strong> <xsl:value-of select="ns:Address/@NearestAirport"/>
                </div>
              </td>
              <td>
                <xsl:value-of select="@Rating"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
  
</xsl:stylesheet>