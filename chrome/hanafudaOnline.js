function addLiveEventListeners(selector, event, handler){
    document.querySelector("body").addEventListener(
         event
        ,function(evt){
            var target = evt.target;
            while (target != null){
                var isMatch = target.matches(selector);
                if (isMatch){
                    handler(evt);
                    return;
                }
                target = target.parentElement;
            }
        }
        ,true
    );
}

let rainman = 'd6d65796-669e-4dcd-bd8a-696a03a1607f';

/* Initial checks */
checkAlmostKasu();
checkAlmostTane();

/* Check opponent collection routine */
document.querySelector('div#opponent-collection').addEventListener("DOMNodeInserted", function(evt) {
    checkAlmostKasu();
    checkAlmostTane();
}, false);


/* Check opponent almost Kasu */
function checkAlmostKasu() {

    /* Count kasu cards of opponent */
    let countKasu = document.querySelectorAll('div#opponent-collection > div.collection:nth-child(4) > div.front').length;
    let count = 0;
    let cardsToBorder = document.querySelectorAll('div#opponent-collection > div.collection:nth-child(4) > div.empty');

    cardsToBorder.forEach(cardToBorder => {
        
        if (cardToBorder !== null) {

            cardToBorder.style.borderStyle = 'hidden';

            if (count == 0) {

                /* If 8, add yellow border */
                if (countKasu == 8) {
            
                    cardToBorder.style.border = 'yellow';
                    cardToBorder.style.borderStyle = 'dotted';
        
                }
        
                /* If 9 or +, add red border */
                if (countKasu >= 9) {
        
                    cardToBorder.style.border = 'red';
                    cardToBorder.style.borderStyle = 'dotted';
        
                }
            }

        }

        count++;
    });

    /* Clean */
    let cardsToClean = document.querySelectorAll('div#opponent-collection > div.collection:nth-child(4) > div.front');

    cardsToClean.forEach(cardToClean => {
        cardToClean.style.borderStyle = 'hidden';
    });
    

}

/* Check opponent almost Tane */
function checkAlmostTane() {

    /* Count tane cards of opponent */
    let countTane = document.querySelectorAll('div#opponent-collection > div.collection:nth-child(2) > div.front').length;
    let count = 0;
    let cardsToBorder = document.querySelectorAll('div#opponent-collection > div.collection:nth-child(2) > div.empty');
    
    cardsToBorder.forEach(cardToBorder => {
        
        if (cardToBorder !== null) {

            cardToBorder.style.borderStyle = 'hidden';

            if (count == 0) {

                /* If 3, add yellow border */
                if (countTane == 3) {
            
                    cardToBorder.style.border = 'yellow';
                    cardToBorder.style.borderStyle = 'dotted';

                }

                /* If 4 or +, add red border */
                if (countTane >= 4) {

                    cardToBorder.style.border = 'red';
                    cardToBorder.style.borderStyle = 'dotted';

                }
                
            }
        }

        count++;
    });

    /* Clean */
    let cardsToClean = document.querySelectorAll('div#opponent-collection > div.collection:nth-child(2) > div.front');

    cardsToClean.forEach(cardToClean => {
        cardToClean.style.borderStyle = 'hidden';
    });

}