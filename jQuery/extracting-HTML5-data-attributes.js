
// only visible, via tr selector:

$('table[id$="someID"] tbody tr:visible').each(function() { console.log($(this).data("somefield1")+" ==> some Field 1 = "+$(this).data("somefield2")); }) 

// all, via rows property:

$(($('table[id$="someID"] tbody')[0]).rows).each(function() { console.log($(this).data("somefield1")); })
