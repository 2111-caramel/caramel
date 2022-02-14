const cityObjs = {
  cities: [
    {
      id: 0,
      name: "Albuquerque",
      state: "NM",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/albuquerque-f730c0301f.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/albuquerque_web-3079b54e59.jpg",
      info: "As a modern-day cultural and political centre, Albuquerque has long played a secondary role to the state capital, Santa Fe, which lies some 60 miles (100 km) to the northeast. Albuquerque is New Mexico’s largest city and its economic capital, however, and it is served by an extensive network of railroads, airlines, and highways. At the heart of the city’s economy are the military and high-technology sectors.",
      lat: "35.0844",
      lng: "-106.6504",
    },
    {
      id: 0,
      name: "Atlanta",
      state: "GA",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/atlanta-9e33744cb4.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/atlanta_web-01e0d78232.jpg",
      info: "Atlanta serves as the cultural and economic center of the Atlanta metropolitan area, home to more than six million people and the ninth-largest metropolitan area in the nation. It is the seat of Fulton County, the most populous county in Georgia. Situated among the foothills of the Appalachian Mountains, it features unique topography that includes rolling hills and the most dense urban tree coverage in the United States.",
      lat: "33.7490",
      lng: "-84.3880",
    },
    {
      id: 0,
      name: "Austin",
      state: "TX",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/austin-f42354c37f.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/austin_web-e93a5e75a0.jpg",
      info: "Austin is the state capital of Texas, an inland city bordering the Hill Country region. Home to the University of Texas flagship campus, Austin is known for its eclectic live-music scene centered around country, blues and rock. Its many parks and lakes are popular for hiking, biking, swimming and boating. South of the city, Formula One's Circuit of the Americas raceway has hosted the United States Grand Prix.",
      lat: "30.2672",
      lng: "-97.7431",
    },
    {
      id: 0,
      name: "Baltimore",
      state: "MA",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/baltimore-14c1f65307.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/baltimore_web-251806a8b8.jpg",
      info: "Baltimore is a major city in Maryland with a long history as an important seaport. Fort McHenry, birthplace of the U.S. national anthem, “The Star-Spangled Banner,” sits at the mouth of Baltimore’s Inner Harbor. Today, this harbor area offers shops, upscale crab shacks and attractions like the Civil War–era warship the USS Constellation and the National Aquarium, showcasing thousands of marine creatures.",
      lat: "39.2904",
      lng: "-76.6122",
    },
    {
      id: 0,
      name: "Boston",
      state: "MA",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/boston-7399414b98.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/boston_web-550bb970ba.jpg",
      info: "Boston, officially the City of Boston, is the capital and most populous city of the Commonwealth of Massachusetts in the United States and 24th-most populous city in the country. The city proper covers 48.4 square miles with a population of 675,647 in 2020, also making it the most populous city in New England.",
      lat: "42.3601",
      lng: "-71.0589",
    },
    {
      id: 0,
      name: "Charlotte",
      state: "NC",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/charlotte-acc065366a.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/charlotte_web-062d6f0cd8.jpg",
      info: "Charlotte is a major city and commercial hub in North Carolina. Its modern city center (Uptown) is home to the Levine Museum of the New South, which explores post–Civil War history in the South, and hands-on science displays at Discovery Place. Uptown is also known for the NASCAR Hall of Fame, which celebrates the sport of auto racing through interactive exhibits and films.",
      lat: "35.2271",
      lng: "-80.8431",
    },
    {
      id: 0,
      name: "Chicago",
      state: "IL",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chicago-1e610b84c3.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chicago_web-b20b0b8249.jpg",
      info: "Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works.",
      lat: "41.8781",
      lng: "-87.6298",
    },
    {
      id: 0,
      name: "Colorado Springs",
      state: "CO",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/colorado-springs-ccf32e73d2.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/colorado-springs_web-a8228d2190.jpg",
      info: "Colorado Springs, at an elevation of 6,035 ft., is a city in Colorado at the eastern foot of the Rocky Mountains. It lies near glacier-carved Pikes Peak, a landmark in Pike National Forest with hiking trails and a cog railway leading to its 14,114-ft. summit. The city's Garden of the Gods park features iconic red-sandstone formations and mountain views.",
      lat: "38.8339",
      lng: "-104.8214",
    },
    {
      id: 0,
      name: "Columbus",
      state: "OH",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/columbus-f65f5476cf.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/columbus_web-748d46d705.jpg",
      info: "Columbus is Ohio’s state capital. The city’s Scioto Mile is a string of parks on both sides of the Scioto River, with a huge interactive fountain and trails. On the west bank, the COSI science center offers hands-on exhibits and a planetarium. Downtown, the Columbus Museum of Art includes American and European paintings and a sculpture garden. The German Village area has restored brick houses built by 1800s settlers.",
      lat: "39.961178",
      lng: "-82.998795",
    },
    {
      id: 0,
      name: "Dallas",
      state: "TX",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dallas-a55f677457.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dallas_web-1b0ab83512.jpg",
      info: "Dallas, a modern metropolis in north Texas, is a commercial and cultural hub of the region. Downtown’s Sixth Floor Museum at Dealey Plaza commemorates the site of President John F. Kennedy’s assassination in 1963. In the Arts District, the Dallas Museum of Art and the Crow Collection of Asian Art cover thousands of years of art. The sleek Nasher Sculpture Center showcases contemporary sculpture.",
      lat: "32.7287",
      lng: "-96.6228",
    },
    {
      id: 0,
      name: "Denver",
      state: "CO",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/denver-655725fd8b.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/denver_web-9726d88300.jpg",
      info: "Denver, the capital of Colorado, is an American metropolis dating to the Old West era. Larimer Square, the city’s oldest block, features landmark 19th-century buildings. Museums include the Denver Art Museum, an ultramodern complex known for its collection of indigenous works, and the mansion of famed Titanic survivor Molly Brown. Denver is also a jumping-off point for ski resorts in the nearby Rocky Mountains.",
      lat: "39.5567",
      lng: "-104.8280",
    },
    {
      id: 0,
      name: "Detroit",
      state: "MI",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/detroit-e0a9dfeff2.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/detroit_web-fa9062b00a.jpg",
      info: 'Detroit is the largest city in the midwestern state of Michigan. Near Downtown, the neoclassical Detroit Institute of Arts is famed for the Detroit Industry Murals painted by Diego Rivera, and inspired by the city’s ties to the auto industry, giving it the nickname "Motor City." Detroit is also the birthplace of Motown Records, whose chart-topping history is on display at their original headquarters, Hitsville U.S.A.',
      lat: "42.348495",
      lng: "-83.060303",
    },
    {
      id: 0,
      name: "Honolulu",
      state: "HI",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/honolulu-624c07453d.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/honolulu_web-1b1279edc3.jpg",
      info: "Honolulu, on the island of Oahu’s south shore, is capital of Hawaii and gateway to the U.S. island chain. The Waikiki neighborhood is its center for dining, nightlife and shopping, famed for its iconic crescent beach backed by palms and high-rise hotels, with volcanic Diamond Head crater looming in the distance. Sites relating to the World War II attack on Pearl Harbor include the USS Arizona Memorial.",
      lat: " 21.315603",
      lng: "-157.858093",
    },
    {
      id: 0,
      name: "Houston",
      state: "TX",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/houston-0e46f4fbb7.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/houston_web-7a1ff7109f.jpg",
      info: "Houston is a large metropolis in Texas, extending to Galveston Bay. It’s closely linked with the Space Center Houston, the coastal visitor center at NASA’s astronaut training and flight control complex. The city’s relatively compact Downtown includes the Theater District, home to the renowned Houston Grand Opera, and the Historic District, with 19th-century architecture and upscale restaurants.",
      lat: "29.7604",
      lng: "-95.3698",
    },
    {
      id: 0,
      name: "Indianapolis",
      state: "IN",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/indianapolis-0f293b1150.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/indianapolis_web-de0ee7a5bd.jpg",
      info: "Indianapolis, colloquially known as Indy, is the state capital and most-populous city of the U.S. state of Indiana and the seat of Marion County. The city is home to three Fortune 500 companies, two major league sports clubs, four university campuses, and several museums, including the world's largest children's museum. However, the city is perhaps best known for annually hosting the world's largest single-day sporting event, the Indianapolis 500.",
      lat: "39.7684",
      lng: "-86.1581",
    },
    {
      id: 0,
      name: "Jacksonville",
      state: "FL",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/jacksonville-62a5b94ba8.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/jacksonville_web-cc69395f3f.jpg",
      info: "Jacksonville is a city located on the Atlantic coast of Florida, the most populous city in the state, and is the largest city by area in the contiguous United States as of 2020.",
      lat: "30.3322",
      lng: "-81.6557",
    },
    {
      id: 0,
      name: "Kansas City",
      state: "KS",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kansas-city-1e8f1c1456.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kansas-city_web-d977356d14.jpg",
      info: "Kansas City sits on Missouri's western edge, straddling the border with Kansas. It's known for its barbecue, jazz heritage and fountains. Downtown, the American Jazz Museum shares a building with the Negro Leagues Baseball Museum in the historic 18th & Vine Jazz District. The Nelson-Atkins Museum of Art, with giant shuttlecocks out front, houses nearly 40,000 works of art, from ancient to contemporary collections.",
      lat: "39.0997",
      lng: "-94.5786",
    },
    {
      id: 0,
      name: "Las Vegas",
      state: "NV",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/las-vegas-6acb21a1fe.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/las-vegas_web-7dc177ab7c.jpg",
      info: "Las Vegas, often known simply as Vegas, is the 26th-most populous city in the United States, the most populous city in the state of Nevada, and the county seat of Clark County. The city anchors the Las Vegas Valley metropolitan area and is the largest city within the greater Mojave Desert. Las Vegas is known for its casinos and world-class entertainment.",
      lat: "36.1699",
      lng: "-115.1398",
    },
    {
      id: 0,
      name: "Los Angeles",
      state: "CA",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/los-angeles-f5b60deb04.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/los-angeles_web-2eedb2a83e.jpg",
      info: "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes.",
      lat: "34.0522",
      lng: "-118.2437",
    },
    {
      id: 0,
      name: "Louisville",
      state: "KY",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/louisville-d5997729f5.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/louisville_web-af543d6a99.jpg",
      info: `Louisville, Kentucky's largest city, sits on the Ohio River along the Indiana border. Every May, its race course Churchill Downs hosts the Kentucky Derby, a renowned horse race whose long history is explored at the Kentucky Derby Museum. Baseball is celebrated at the Louisville Slugger Museum and Factory, where Major League bats are produced and a giant baseball "slugger" marks the entrance.`,
      lat: "38.2527",
      lng: "-85.7585",
    },
    {
      id: 0,
      name: "Memphis",
      state: "TN",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/memphis-6135da61bc.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/memphis_web-6015ce820e.jpg",
      info: "Memphis is a city on the Mississippi River in southwest Tennessee, famous for the influential strains of blues, soul and rock 'n' roll that originated there. Elvis Presley, B.B. King and Johnny Cash recorded albums at the legendary Sun Studio, and Presley’s Graceland mansion is a popular attraction. Other music landmarks include the Rock 'n' Soul Museum, Blues Hall of Fame and Stax Museum of American Soul Music.",
      lat: "35.1495",
      lng: "-90.0490",
    },
    {
      id: 0,
      name: "Miami",
      state: "FL",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/miami-730928937f.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/miami_web-9307474a5e.jpg",
      info: "Miami, officially the City of Miami, is a coastal metropolis located in Miami-Dade County in southeastern Florida. Miami is known for its white-sand beaches, warm climate, delicious cuisine, Cuban coffee, and its Latin-American influences. Some popular attractions include Miami Beach, South Beach, Zoo Miami, Bayside Marketplace, Little Havana, Ocean Drive, and Deering Estate.",
      lat: "25.7617",
      lng: "-80.1918",
    },
    {
      id: 0,
      name: "Milwaukee",
      state: "WI",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/milwaukee-aa45ba9b6b.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/milwaukee_web-59a01d05ad.jpg",
      info: "Milwaukee is a city in the U.S. state of Wisconsin on Lake Michigan's western shore. It's known for its breweries, many of which offer tours chronicling its role in the beer industry. Overlooking the Menomonee River, the Harley-Davidson Museum displays classic motorcycles, including one of Elvis Presley’s. Nearby is the Milwaukee Public Museum, with its large-scale European Village and a recreation of old Milwaukee.",
      lat: "43.0389",
      lng: "-87.9065",
    },
    {
      id: 0,
      name: "Minneapolis",
      state: "MN",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/minneapolis-saint-paul-0167dd447d.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/minneapolis-saint-paul_web-16dbfd4210.jpg",
      info: `Minneapolis is a major city in Minnesota that forms "Twin Cities" with the neighboring state capital of St. Paul. Bisected by the Mississippi River, it's known for its parks and lakes. Minneapolis is also home to many cultural landmarks like the Walker Art Center, a contemporary art museum, and the adjacent Minneapolis Sculpture Garden, famed for Claes Oldenburg's "Spoonbridge and Cherry" sculpture.`,
      lat: "44.9778",
      lng: "-93.2650",
    },
    {
      id: 0,
      name: "Nashville",
      state: "TN",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nashville-79d8242c30.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nashville_web-928afede11.jpg",
      info: "Nashville is the capital of the U.S. state of Tennessee and home to Vanderbilt University. Legendary country music venues include the Grand Ole Opry House, home of the famous “Grand Ole Opry” stage and radio show. The Country Music Hall of Fame and Museum and historic Ryman Auditorium are Downtown, as is the District, featuring honky-tonks with live music and the Johnny Cash Museum, celebrating the singer's life.",
      lat: "36.1627",
      lng: "-86.7816",
    },
    {
      id: 0,
      name: "New York",
      state: "NY",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/new-york-9cb6cc2ae5.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/new-york_web-99d9bb0809.jpg",
      info: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.",
      lat: "40.7128",
      lng: "-74.0060",
    },
    {
      id: 0,
      name: "Oakland",
      state: "CA",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/birmingham-al-519d15019a.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/birmingham-al_web-8faa3202a7.jpg",
      info: "Oakland is a city on the east side of San Francisco Bay, in California. Jack London Square has a statue of the writer, who frequented the area. Nearby, Old Oakland features restored Victorian architecture and boutiques. Near Chinatown, the Oakland Museum of California covers state history, nature and art. Uptown contains the art deco Fox and Paramount theaters, restaurants, bars and galleries.",
      lat: "37.8044", lng: "-122.2712"
    },
    {
      id: 0,
      name: "Oklahoma City",
      state: "OK",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/oklahoma-city-429f6bf45d.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/oklahoma-city_web-2d2437c3f2.jpg",
      info: "Oklahoma City is the capital of the U.S. state of Oklahoma. It's known for its cowboy culture and capitol complex, surrounded by working oil wells. The reflecting pool and empty glass and bronze chairs of the Oklahoma City National Memorial recall the victims of the 1995 bombing of the Alfred P. Murrah Federal Building. The Survivor Tree, an American elm nearly destroyed in the attack, is also part of the memorial.",
      lat: "35.4676",
      lng: "-97.5164",
    },
    {
      id: 0,
      name: "Philadelphia",
      state: "PA",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/philadelphia-41bf6ab8ef.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/philadelphia_web-ebd7cad1dc.jpg",
      info: `Philadelphia, Pennsylvania’s largest city, is notable for its rich history, on display at the Liberty Bell, Independence Hall (where the Declaration of Independence and Constitution were signed) and other American Revolutionary sites. Also iconic are the steps of the Philadelphia Museum of Art, immortalized by Sylvester Stallone’s triumphant run in the film "Rocky."`,
      lat: "39.9526",
      lng: "-75.1652",
    },
    {
      id: 0,
      name: "Phoenix",
      state: "AZ",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/phoenix-9fedc88f57.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/phoenix_web-92224752db.jpg",
      info: "Phoenix is the capital of the southwestern U.S. state of Arizona. Known for its year-round sun and warm temperatures, it anchors a sprawling, multicity metropolitan area known as the Valley of the Sun. It's known for high-end spa resorts, Jack Nicklaus–designed golf courses and vibrant nightclubs. Other highlights include the Desert Botanical Garden, displaying cacti and numerous native plants.",
      lat: "33.4484",
      lng: "-112.0740",
    },
    {
      id: 0,
      name: "Portland",
      state: "OR",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/portland-or-90f71ea149.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/portland-or_web-55a07378b0.jpg",
      info: "Portland, Oregon’s largest city, sits on the Columbia and Willamette rivers, in the shadow of snow-capped Mount Hood. It’s known for its parks, bridges and bicycle paths, as well as for its eco-friendliness and its microbreweries and coffeehouses. Iconic Washington Park encompasses sites from the formal Japanese Garden to Oregon Zoo and its railway. The city hosts thriving art, theater and music scenes.",
      lat: "45.5152",
      lng: "-122.6784",
    },
    {
      id: 0,
      name: "Raleigh",
      state: "NC",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/raleigh-e74249142f.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/raleigh_web-2909c09abe.jpg",
      info: "Raleigh is the capital city of North Carolina. It’s known for its universities, including North Carolina State University. The number of technology and scholarly institutions around Raleigh, Chapel Hill and Durham make the area known as the Research Triangle. The North Carolina State Capitol is a 19th-century Greek Revival–style building with a statue of George Washington dressed as a Roman general in its rotunda.",
      lat: "35.7796",
      lng: "-78.6382",
    },
    {
      id: 0,
      name: "San Antonio",
      state: "TX",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-antonio-462487f470.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-antonio_web-37402dd546.jpg",
      info: "San Antonio is a major city in south-central Texas with a rich colonial heritage. The Alamo, an 18th-century Spanish mission preserved as a museum, marks an infamous 1836 battle for Texan independence from Mexico. Following the San Antonio River, the miles-long River Walk is a landmark pedestrian promenade lined with cafes and shops. HemisFair Park’s 750-ft. Tower of the Americas overlooks the city.",
      lat: "29.4241",
      lng: "-98.4936",
    },
    {
      id: 0,
      name: "San Diego",
      state: "CA",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-diego-50187120db.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-diego_web-2be4eba8b4.jpg",
      info: "San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate. Immense Balboa Park is the site of the renowned San Diego Zoo, as well as numerous art galleries, artist studios, museums and gardens. A deep harbor is home to a large active naval fleet, with the USS Midway, an aircraft-carrier-turned-museum, open to the public.",
      lat: "32.7157",
      lng: "-117.1611",
    },
    {
      id: 0,
      name: "San Francisco",
      state: "CA",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area-7f6d130d20.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg",
      info: "San Francisco, officially the City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California. A popular tourist destination, San Francisco is known for its cool summers, fog, steep rolling hills, eclectic mix of architecture, and landmarks, including the Golden Gate Bridge, cable cars, the former Alcatraz Federal Penitentiary, Fisherman's Wharf, and its Chinatown district.",
      lat: "37.7749",
      lng: "-122.4194",
    },
    {
      id: 0,
      name: "San Jose",
      state: "CA",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-jose-0a8dfb4120.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-jose_web-c73054cc3d.jpg",
      info: "San Jose is a large city surrounded by rolling hills in Silicon Valley, a major technology hub in California's Bay Area. Architectural landmarks, from the 1883 Italianate-style Oddfellows building to Spanish Colonial Revival structures, make up the downtown historic district. The downtown area is also home to the Tech Museum of Innovation, devoted to the exploration of science and technology.",
      lat: "37.3382",
      lng: "-121.8863",
    },
    {
      id: 0,
      name: "Seattle",
      state: "WA",
      imageUrlMobile:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/seattle-9bc4830d22.jpg",
      imageUrlWeb:
        "https://d13k13wj6adfdf.cloudfront.net/urban_areas/seattle_web-e07e580eca.jpg",
      info: "Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and evergreen forests, and contains thousands of acres of parkland. Washington State’s largest city, it’s home to a large tech industry, with Microsoft and Amazon headquartered in its metropolitan area. The futuristic Space Needle, a 1962 World’s Fair legacy, is its most iconic landmark.",
      lat: "47.6062",
      lng: "-122.3321",
    },
  ],
};

const newCitiesObj = cityObjs.cities.map((city, idx) => {
  return {
    id: idx + 1,
    name: city.name,
    state: city.state,
    imageUrlMobile: city.imageUrlMobile,
    imageUrlWeb: city.imageUrlWeb,
    lat: city.lat,
    lng: city.lng,
    info: city.info,
  };
});

const cityNameSlugs = {
  cities: [
    "Albuquerque,%20NM",
    "Atlanta,%20GA",
    "Austin,%20TX",
    "Baltimore,%20MD",
    "Boston,%20MA",
    "Charlotte,%20NC",
    "Chicago,%20IL",
    "Colorado%20Springs,%20CO",
    "Columbus,%20OH",
    "Dallas,%20TX",
    "Denver,%20CO",
    "Detroit,%20MI",
    "Honolulu,%20HI",
    "Houston,%20TX",
    "Indianapolis,%20IN",
    "Jacksonville,%20FL",
    "Kansas%20City,%20KS",
    "Las%20Vegas,%20NV",
    "Los%20Angeles,%20CA",
    "Louisville,%20KY",
    "Memphis,%20TN",
    "Miami,%20FL",
    "Milwaukee,%20WI",
    "Minneapolis,%20MN",
    "Nashville,%20TN",
    "New%20York,%20NY",
    "Oakland,%20CA",
    "Oklahoma%20city,%20OK",
    "Philadelphia,%20PA",
    "Phoenix,%20AZ",
    "Portland,%20OR",
    "Raleigh,%20NC",
    "San%20Antonio,%20TX",
    "San%20Diego,%20CA",
    "San%20Francisco,%20CA",
    "San%20Jose,%20CA",
    "Seattle,%20WA",
  ],
};

const cityNameFormats = {
  newCitiesObj,
  cityNameSlugs,
};

module.exports = cityNameFormats;
