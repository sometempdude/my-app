export default (url, data) => {
    var replacedFields = {};
  
    var newUrl = url.replace(/{([a-z_]+)}/gi, function(match, field) {
      if (typeof data[field] !== 'undefined' && data[field] !== null) {
        replacedFields[field] = true;
        return data[field];
      } else {
        return field;
      }
    });
  
    var newData = {};
    for (var field in data) {
      if (!replacedFields[field]) {
        newData[field] = data[field];
      }
    }
  
    return { url: newUrl, data: newData };
  };
