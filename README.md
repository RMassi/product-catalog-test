# Case Study Tech

- You have 2.5 hours time.
- Your answers can be in English or Portuguese, whatever you prefer.
- All non-human help is allowed. You can use the Internet and any site and tools you want. If you have questions about the tasks please don't hesitate to ask!
- Visit the case study on [Bitbucket](https://bitbucket.org/dafiti/product-catalog)
- Create a fork for this repository git@bitbucket.org:dafiti/product-catalog.git and clone it.
- Solve the tasks as described.
- After you finished, please create a Pull Requset for the master branch at git@bitbucket.org:dafiti/product-catalog.git [details on pull requests](https://www.atlassian.com/git/tutorials/making-a-pull-request/)

## Your tools
- Editor/IDE
- Git client

## The project
GFG Product Catalog

### Description
You and your team have the task to design and build a new product catalog for the GFG E-Commerce platform.

## Your tasks
1. Design two alternative Storage solutions and describe advantages and drawbacks of either approach. Think about high number of concurrent requests (moderate write, heavily read). It can be different database strucutures or even completly different database products (only requirement is it needs to be opensource)
2. Write a Filter (transformation to internal data format if needed) and Validator (correct input values) for the input data for the WMS service into our product catalog (you can use a language of your choice, no pseudo-code is allowed). Note:  We should be somehow able to execute the solution (e.g. run script, executable, unit test, etc.).
3. Describe or implement a solution to handle temporary and permanent failure of the involved webservices (language of choice, pseudo-code allowed, external tools or frameworks allowed). As the time might be already tight, at least sketch out some ideas.

## Technical Details
There are a couple of backend webservices involved. You don't need to care about how the data is requested (e.g. REST, Thrift or something else). For our purpose we will use a simple JSON file as input data to validate your implementation. Use [this file](wms_product_data.json) for example data.

### WMS webservice (warehouse management system)
- async possible
- data can be imported
- it is likely that new attributes will be added)
- will always send a batch between 0 and N products which has been changed or added in the WMS since the last call (delta)

```
Input Parameters: <NONE>
Output:
0..n
    sku -> required, String
    price -> required, Double (Int can be converted to Double)
    name -> required, String
    description-> required, String
    size -> required, Mixed (return value can be an array list or single value)
    brand -> required, String
    categories -> required, Array
    product_image_url -> required, String, valid URL, valid image extension (jpg, jpeg, png, gif), http as protocol can be prepended if domain is valid
    special_price -> optional, Double (Int can be converted to Double)
```


### Stock webservice
- realtime
- required

```
Input Parameters:
    sku -> String
    size -> String
Output:
0..1
    quantity -> Int
    warehouse -> String
```

### CMS webservice
- async possible
- cachable
- acceptable to go without
- there is a default placeholder text if not available

```
Input Parameters:
    sku -> String|category -> string
Output:
0..n
    content -> String
    region -> String
```

