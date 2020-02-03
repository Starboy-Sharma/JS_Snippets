     /**
     * This code will add an anchor tag if a string contains url
     * @param  {string} inputText
     * @return {string}       String with anchor tag with target blank
     * note: This code snippet is copy from STACK OVERFLOW https://stackoverflow.com/a/3890175
     * Problem: If your string already contains anchor tag then this code is no longer in use and return wrong data.
     */
   function linkify (inputText) {

        // If string already contains an anchor tag then remove anchor tag
        var inputText = inputText.replace(/<\/?a[^>]*>/g, "");

        var replacedText, replacePattern1, replacePattern2, replacePattern3;

        //URLs starting with http://, https://, or ftp://
        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

        //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

        //Change email addresses to mailto:: links.
        replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
        replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

        return replacedText;
    }
    
    
    /**
     * This code will add an anchor tag if a string contains url and also ignores if a string has already anchor tag only replace domain urls with anchor tag.
     * @param  {string} inputText
     * @return {string}       String with anchor tag with target blank
     * note: This code snippet is copy from STACK OVERFLOW https://stackoverflow.com/a/3890175
     * Problem: If your string already contains anchor tag then this code is no longer in use and return wrong data.
     */
    function createTextLinks_(text) {

    return (text || "").replace(
      /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
      function(match, space, url){
        var hyperlink = url;
        if (!hyperlink.match('^https?:\/\/')) {
          hyperlink = 'http://' + hyperlink;
        }
        return space + '<a href="' + hyperlink + '">' + url + '</a>';
      }
    );
  };
