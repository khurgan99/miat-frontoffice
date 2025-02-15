import { useEffect, useLayoutEffect, useState } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import mongoliaGeoJSON from './mn.json';
import am5geodataWorldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useTranslation } from 'react-i18next';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Destinations = () => {

    const [choosedCountry, setChoosedCountry] = useState({});
    const [shownavigate, setShowNavigate] = useState(true);

    const { t } = useTranslation();

    const citiesMn = [
        {
            id: "ulaanbaatar",
            title: "Ulaanbaatar",
            country: "Mongolia",
            distance: "N/A",
            duration: "N/A",
            image: "/image/main/AdobeStock_227948748.jpg",
            geometry: { type: "Point", coordinates: [106.917, 47.9186] }
        },
        {
            id: "dalanzadgad",
            title: "Dalanzadgad",
            country: "Mongolia",
            distance: "N/A",
            duration: "N/A",
            image: "/image/main/_MG_9388KhermenTsavUmnugovi.jpg",
            geometry: { type: "Point", coordinates: [104.416, 43.5708] }
        },
        {
            id: "uliastai",
            title: "Uliastai",
            country: "Mongolia",
            distance: "N/A",
            duration: "N/A",
            image: "/image/main/OtgontengerZavhan.jpg",
            geometry: { type: "Point", coordinates: [97.7694, 47.7417] }
        },
        {
            id: "khovd",
            title: "Khovd",
            country: "Mongolia",
            distance: "N/A",
            duration: "N/A",
            image: "/image/main/AltanHuhiiHovd.jpg",
            geometry: { type: "Point", coordinates: [91.6419, 48.0056] }
        },
        {
            id: "altai",
            title: "Altai",
            country: "Mongolia",
            distance: "N/A",
            duration: "N/A",
            image: "/image/main/photo_2024-02-14_15-53-24.jpg",
            geometry: { type: "Point", coordinates: [96.2491, 46.3722] }
        },
        {
            id: "ulaangom",
            title: "Ulaangom",
            country: "Mongolia",
            distance: "N/A",
            duration: "N/A",
            image: "/image/main/IMG_4013TurgenMountainsUvs.jpg",
            geometry: { type: "Point", coordinates: [92.0667, 49.9811] }
        },
        {
            id: "murun",
            title: "Murun",
            country: "Mongolia",
            distance: "N/A",
            duration: "N/A",
            image: "/image/main/DJI_0077.jpg",
            geometry: { type: "Point", coordinates: [100.155, 49.6342] }
        },
        {
            id: "ulgii",
            title: "Ulgii",
            country: "Mongolia",
            distance: "N/A",
            duration: "N/A",
            image: "/image/main/BagaturgeniiuulsBayanUlgii.jpg",
            geometry: { type: "Point", coordinates: [89.9674, 48.9683] }
        },
    ];

    const cities = [
        {
            id: "ulaanbaatar",
            title: t('ulaanbaatar'),
            country: 'mongolia',
            image: "/image/main/AdobeStock_227948748.jpg",
            geometry: { type: "Point", coordinates: [106.917, 47.9186] }
        },
        {
            id: "frankfurt",
            title: t('frankfurt'),
            country: 'germany',
            distance: '7,010 km',
            duration: "8 hours, 45 minutes",
            image: "/image/main/vertical-view-roemerberg-frankfurt-germany.jpg",
            geometry: { type: "Point", coordinates: [8.6821, 50.1109] }
        },
        {
            id: "hongkong",
            title: t('hongkong'),
            country: 'china',
            distance: '3,350 km',
            duration: "4 hours, 10 minutes",
            image: "/image/main/hong-kong-skyline-with-boats.jpg",
            geometry: { type: "Point", coordinates: [114.2, 22.3] }
        },
        {
            id: "tokyo",
            title: t('tokyo'),
            country: 'japan',
            distance: '3,869 km',
            duration: "4 hours, 22 minutes",
            image: "/image/main/AdobeStock_268173642.jpg",
            geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
        },
        {
            id: "seoul",
            title: t('seoul'),
            country: 'south_korea',
            distance: '2,304 km',
            duration: "2 hours, 45 minutes",
            image: "/image/main/seoul-tower-with-gyeongbokgung-roof-red-autumn-maple-leaves-namsan-mountain-south-korea.jpg",
            geometry: { type: "Point", coordinates: [126.9779, 37.5665] }
        },
        {
            id: "ho_chi_minh",
            title: t('ho_chi_minh'),
            country: 'vietnam',
            distance: '4,563 km',
            duration: "5 hours, 30 minutes",
            image: "/image/main/54455949-city-18144-167c85df43f.jpg",
            geometry: { type: "Point", coordinates: [106.6297, 10.8231] }
        },
        {
            id: "istanbul",
            title: t('istanbul'),
            country: 'turkey',
            distance: '6,702 km',
            duration: "8 hours, 32 minutes",
            image: "/image/main/AdobeStock_304983855.jpg",
            geometry: { type: "Point", coordinates: [28.9784, 41.0082] }
        },
        {
            id: "busan",
            title: t('busan'),
            country: 'south_korea',
            distance: '2,593 km',
            duration: "3 hours, 1 minute",
            image: "/image/main/AdobeStock_306120806.jpg",
            geometry: { type: "Point", coordinates: [129.0756, 35.1796] }
        },
        {
            id: "bangkok",
            title: t('bangkok'),
            country: 'thailand',
            distance: '4,117 km',
            duration: "5 hours, 0 minute",
            image: "/image/main/AdobeStock_105446989.jpg",
            geometry: { type: "Point", coordinates: [100.5018, 13.7563] }
        },
        {
            id: "beijing",
            title: t('beijing'),
            country: 'china',
            distance: '1,383 km',
            duration: "1 hour, 50 minutes",
            image: "/image/main/AdobeStock_38307012.jpg",
            geometry: { type: "Point", coordinates: [116.4074, 39.9042] }
        },
        {
            id: "osaka",
            title: t('osaka'),
            country: 'japan',
            distance: '3,221 km',
            duration: "3 hours, 50 minutes",
            image: "/image/main/osaka-castle-cherry-blossom-spring-sakura-seasons-osaka-japan.jpg",
            geometry: { type: "Point", coordinates: [135.5022, 34.6937] }
        },
        {
            id: "phuket",
            title: t('phuket'),
            country: 'thailand',
            distance: '4,847 km',
            duration: "6 hours, 2 minutes",
            image: "/image/main/beautiful-girl-sitting-rock-james-bond-island-phang-nga-thailand.jpg",
            geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
        },
        {
            id: "guangzhou",
            title: t('guangzhou'),
            country: 'china',
            distance: '2,965 km',
            duration: "3 hours, 45 minutes",
            image: "/image/main/AdobeStock_67203423.jpg",
            geometry: { type: "Point", coordinates: [113.2644, 23.1291] }
        }
    ];

    const clickShowNavigate = () => {
        setShowNavigate(!shownavigate)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    useLayoutEffect(() => {
        let root = am5.Root.new("chartdiv");

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "rotateX",
                panY: "rotateY",
                // projection: am5map.geoMercator(),
                // projection: am5map.geoNaturalEarth1(),
                projection: am5map.geoOrthographic(),
                // homeGeoPoint: { latitude: 46.8625, longitude: 103.8467 },
                // wheelY: "none",
                // rotationX: -130.8467,
                // scale: 1.5
            })
        );

        var cont = chart.children.push(am5.Container.new(root, {
            layout: root.horizontalLayout,
            x: am5.p100,
            y: 100,
            centerX: am5.p100,
            dx: -10,
        }));

        // Add labels and controls
        cont.children.push(am5.Label.new(root, {
            centerY: am5.p50,
            text: t('connected'),
            fill: am5.color(0xffffff)
        }));

        var switchButton = cont.children.push(am5.Button.new(root, {
            themeTags: ["switch"],
            centerY: am5.p50,
            icon: am5.Circle.new(root, {
                themeTags: ["icon"]
            })
        }));

        cont.children.push(
            am5.Label.new(root, {
                centerY: am5.p50,
                text: t('routes'),
                fill: am5.color(0xffffff)
            })
        );

        switchButton.on("active", function () {
            if (!switchButton.get("active")) {
                
            } else {
                
            }
        });
        

        let zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
        zoomControl.homeButton.set("visible", true);
        chart.chartContainer.get("background").events.on("click", function () {
            goHome();
        })

        zoomControl.homeButton.events.on("click", function () {
            goHome();
        })

        // Create polygon series
        var polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodataWorldLow,
                exclude: ["AQ"]
            })
        );

        polygonSeries.mapPolygons.template.events.on("click", (ev) => {
            var dataItem = ev.target.dataItem;
            var data = dataItem.dataContext;
            if (data.id === 'MN') {
                var zoomAnimation = polygonSeries.zoomToDataItem(dataItem);
                Promise.all([
                    zoomAnimation.waitForStop(),
                ]).then(function (results) {
                    stateSeries.show();
                    // polygonSeries.hide(100)
                    backContainer.show();
                    lineSeries.hide()
                    planeSeries.hide()
                    lineSeriesMn.set("layer", 100);
                    planeSeriesMn.set("layer", 100);
                    citySeriesMn.set("layer", 100);
                    // pointSeriesMn.show();
                    lineSeriesMn.show();
                    planeSeriesMn.show();
                    citySeriesMn.show();
                    cont.hide()
                });

                // zoomMongolia()
            }
        });

        var backgroundSeries = chart.series.unshift(
            am5map.MapPolygonSeries.new(root, {})
        );

        backgroundSeries.mapPolygons.template.setAll({
            fill: am5.color("#00000080"),
            strokeOpacity: 0
        });

        backgroundSeries.data.push({
            geometry: am5map.getGeoRectangle(90, 180, -90, -180)
        });

        chart.animate({ key: "rotationX", to: -80.8467, duration: 1500, easing: am5.ease.inOut(am5.ease.cubic) });
        chart.animate({ key: "rotationY", to: -20.8625, duration: 1500, easing: am5.ease.inOut(am5.ease.cubic) });

        // this will be invisible line (note strokeOpacity = 0) along which invisible points will animate
        let lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
        lineSeries.mapLines.template.setAll({
            strokeOpacity: 1,
            stroke: am5.color("#2259ff"),
            strokeWidth: 1,
            // strokeDasharray: 1
        });

        let lineSeriesMn = chart.series.push(am5map.MapLineSeries.new(root, {
            lineType: "curved",
            visible: false,
        }));

        lineSeriesMn.mapLines.template.setAll({
            strokeOpacity: 1,
            stroke: am5.color("#2259ff"),
            strokeWidth: 1,
            // strokeDasharray: 1
        });

        // this will be visible line. Lines will connectg animating points so they will look like animated
        // let animatedLineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
        // animatedLineSeries.mapLines.template.setAll({
        //     // stroke: am5.color(0xffba00),
        //     // strokeOpacity: 0.6,
        //     strokeWidth: 1,
        // });

        // invisible series which will animate along invisible lines
        let animatedBulletSeries = chart.series.push(
            am5map.MapPointSeries.new(root, {})
        );

        animatedBulletSeries.bullets.push(function () {
            let circle = am5.Circle.new(root, {
                radius: 0
            });

            return am5.Bullet.new(root, {
                sprite: circle
            });
        });

        // destination series
        let citySeries = chart.series.push(
            am5map.MapPointSeries.new(root, {})
        );

        let citySeriesMn = chart.series.push(
            am5map.MapPointSeries.new(root, {
                visible: false,
            })
        );

        let pointSeriesMn = chart.series.push(am5map.MapPointSeries.new(root, {
            // visible: false,
        }));
        let planeSeriesMn = chart.series.push(am5map.MapPointSeries.new(root, {
            visible: false,
        }));
        let planeSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
        let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

        let point1 = addCity({ latitude: 47.9186, longitude: 106.917 }, "Ulaanbaatar");
        let point2 = null;
        if (choosedCountry.id) {
            point2 = addCity({
                latitude: choosedCountry.geometry.coordinates[1],
                longitude: choosedCountry.geometry.coordinates[0]
            }, "Frankfurt");
        } else {
            point2 = addCity({ latitude: 50.1109, longitude: 8.6821 }, "Frankfurt");
        }

        let lineDataItem = lineSeries.pushDataItem({
            pointsToConnect: [point1, point2]
        });

        const point1Mn = addCityMn({ latitude: 47.9186, longitude: 106.917 }, "Ulaanbaatar");
        const point2Mn = addCityMn({ latitude: 48.0056, longitude: 91.6419 });

        let lineDataItemMn = lineSeriesMn.pushDataItem({
            pointsToConnect: [point1Mn, point2Mn]
        });

        let plane = am5.Graphics.new(root, {
            svgPath:
                "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47",
            scale: 0.07,
            centerY: am5.p50,
            centerX: am5.p50,
            fill: am5.color('#fcffff')
        });

        let planeMn = am5.Graphics.new(root, {
            svgPath:
                "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47",
            scale: 0.07,
            centerY: am5.p50,
            centerX: am5.p50,
            fill: am5.color('#fcffff')
        });

        planeSeries.bullets.push(function () {
            let container = am5.Container.new(root, {});
            container.children.push(plane);
            return am5.Bullet.new(root, { sprite: container });
        });

        planeSeriesMn.bullets.push(function () {
            let container = am5.Container.new(root, {});
            container.children.push(planeMn);
            return am5.Bullet.new(root, { sprite: container });
        });

        let circleTemplate = am5.Template.new({});
        // visible city circles
        citySeries.bullets.push(function (root, series, dataItem) {
            let container = am5.Container.new(root, {});

            let circle = container.children.push(
                am5.Circle.new(root, {
                    radius: 6,
                    tooltipText: "{title}",
                    tooltipY: 0,
                    fill: am5.color("#2652fb"), // 6 тэмдэгттэй HEX
                    stroke: am5.color("#2652fb"), // 6 тэмдэгттэй HEX
                    strokeOpacity: 0.3,
                    // "scale": 0.7,
                    "strokeWidth": 5,
                    interactive: true, // Интерактив байдал нэмэх
                    cursorOverStyle: "pointer" // Hover үед курсорыг "pointer" болгох
                }, circleTemplate)
            );

            circle.animate({
                key: "strokeOpacity",
                to: 1,
                duration: 1500, // Animation duration in milliseconds (1s)
                loops: Infinity, // Infinite loop
                easing: am5.ease.yoyo(am5.ease.linear) // Smooth effect
            });

            let countryLabel = container.children.push(
                am5.Label.new(root, {
                    text: "{title}",
                    paddingLeft: 5,
                    populateText: true,
                    fontWeight: "bold",
                    fontSize: 12,
                    centerY: am5.p50,
                    x: circle.get("radius"),
                    layer: 5,
                    fill: am5.color(0xffffff)
                })
            );

            circle.on("radius", function (radius) {
                countryLabel.set("x", radius);
            })

            circle.events.on("pointerover", function (event) {
                event.target.set("scale", 1.2); // Hover үед хэмжээг томруулах
            })
            circle.events.on("pointerout", function (event) {
                event.target.set("scale", 1); // Хэвийн хэмжээнд буцаах
            })

            circle.events.on("click", function (event) {
                planeDataItem.set("positionOnLine", 0);
                // planeDataItem.clear();
                resetPlaneAnimation()
                var dataItem = event.target.dataItem;
                var data = dataItem.dataContext;
                setChoosedCountry(data);
                setShowNavigate(true)
                point2.setAll({
                    longitude: data.geometry.coordinates[0],
                    latitude: data.geometry.coordinates[1]
                })
            });

            return am5.Bullet.new(root, {
                sprite: container
            });
        });

        citySeries.data.setAll(cities);

        citySeriesMn.bullets.push(function (root, series, dataItem) {
            let container = am5.Container.new(root, {});

            let circle = container.children.push(
                am5.Circle.new(root, {
                    layer: 100,
                    radius: 6,
                    tooltipText: "{title}",
                    tooltipY: 0,
                    fill: am5.color("#2652fb"), // 6 тэмдэгттэй HEX
                    stroke: am5.color("#2652fb"), // 6 тэмдэгттэй HEX
                    strokeOpacity: 0.3,
                    // "scale": 0.7,
                    "strokeWidth": 5,
                    interactive: true, // Интерактив байдал нэмэх
                    cursorOverStyle: "pointer" // Hover үед курсорыг "pointer" болгох
                }, circleTemplate)
            );
            circle.set("layer", 200);
            circle.animate({
                key: "strokeOpacity",
                to: 1,
                duration: 1500, // Animation duration in milliseconds (1s)
                loops: Infinity, // Infinite loop
                easing: am5.ease.yoyo(am5.ease.linear) // Smooth effect
            });

            let countryLabel = container.children.push(
                am5.Label.new(root, {
                    text: "{title}",
                    layer: 100,
                    paddingLeft: 5,
                    populateText: true,
                    fontWeight: "bold",
                    fontSize: 12,
                    centerY: am5.p50,
                    x: circle.get("radius"),
                    fill: am5.color(0xffffff)
                })
            );

            circle.on("radius", function (radius) {
                countryLabel.set("x", radius);
            })

            circle.events.on("pointerover", function (event) {
                event.target.set("scale", 1.2); // Hover үед хэмжээг томруулах
            })
            circle.events.on("pointerout", function (event) {
                event.target.set("scale", 1); // Хэвийн хэмжээнд буцаах
            })

            circle.events.on("click", function (event) {
                planeDataItemMn.set("positionOnLine", 0);
                // planeDataItem.clear();
                resetPlaneAnimation()
                var dataItem = event.target.dataItem;
                var data = dataItem.dataContext;
                setChoosedCountry(data);
                setShowNavigate(true)
                point2Mn.setAll({
                    longitude: data.geometry.coordinates[0],
                    latitude: data.geometry.coordinates[1]
                })
            });

            return am5.Bullet.new(root, {
                sprite: container
            });
        });
        citySeriesMn.data.setAll(citiesMn);
        // Prepare line series data
        let mongoliaDataItem = citySeries.getDataItemById("ulaanbaatar");

        am5.array.each(citiesMn, function (did) {
            let destinationDataItem = citySeriesMn.getDataItemById(did.id);
            let lineDataItem = lineSeriesMn.pushDataItem({});
            lineDataItem.set("pointsToConnect", [mongoliaDataItem, destinationDataItem])
        });

        // this will do all the animations
        am5.array.each(cities, function (did) {
            let destinationDataItem = citySeries.getDataItemById(did.id);
            let lineDataItem = lineSeries.pushDataItem({});
            lineDataItem.set("pointsToConnect", [mongoliaDataItem, destinationDataItem])
        });

        let planeDataItem = planeSeries.pushDataItem({
            lineDataItem,
            positionOnLine: 0,
            autoRotate: true
        });

        planeDataItem.dataContext = {};
        let planeDataItemMn = planeSeriesMn.pushDataItem({
            lineDataItem: lineDataItemMn,
            positionOnLine: 0,
            autoRotate: true
        });

        planeDataItemMn.dataContext = {};
        resetPlaneAnimation()

        function resetPlaneAnimation() {
            // Re-animate the plane along the line
            planeDataItem.animate({
                key: "positionOnLine",
                to: 1,
                duration: 30000, // Adjust duration as needed
                loops: Infinity, // Make sure it loops if desired
                easing: am5.ease.yoyo(am5.ease.linear) // Smooth yoyo animation
            });

            // Update the rotation based on position
            planeDataItem.on("positionOnLine", (value) => {
                if (planeDataItem.dataContext.prevPosition < value) {
                    plane.set("rotation", 0);
                }

                if (planeDataItem.dataContext.prevPosition > value) {
                    plane.set("rotation", -180);
                }
                planeDataItem.dataContext.prevPosition = value;
            });

            planeDataItemMn.animate({
                key: "positionOnLine",
                to: 1,
                duration: 30000, // Adjust duration as needed
                loops: Infinity, // Make sure it loops if desired
                easing: am5.ease.yoyo(am5.ease.linear) // Smooth yoyo animation
            });

            // Update the rotation based on position
            planeDataItemMn.on("positionOnLine", (value) => {
                if (planeDataItemMn.dataContext.prevPosition < value) {
                    planeMn.set("rotation", 0);
                }

                if (planeDataItemMn.dataContext.prevPosition > value) {
                    planeMn.set("rotation", -180);
                }
                planeDataItemMn.dataContext.prevPosition = value;
            });
        }

        function addCity(coords, title) {
            return pointSeries.pushDataItem({
                latitude: coords.latitude,
                longitude: coords.longitude
            });
        }

        function addCityMn(coords, title) {
            return pointSeriesMn.pushDataItem({
                latitude: coords.latitude,
                longitude: coords.longitude
            });
        }

        function goHome() {
            chart.goHome();
            stateSeries.hide();
            backContainer.hide();
            lineSeriesMn.hide();
            planeSeriesMn.hide();
            citySeriesMn.hide();
            lineSeries.show()
            planeSeries.show()
            cont.show()
        }

        var stateSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
            visible: false,
            geoJSON: mongoliaGeoJSON
        }));

        var backContainer = chart.children.push(am5.Container.new(root, {
            x: am5.p100,
            centerX: am5.p100,
            dx: -10,
            paddingTop: 2,
            paddingRight: 10,
            paddingBottom: 2,
            y: 100,
            interactiveChildren: false,
            layout: root.horizontalLayout,
            cursorOverStyle: "pointer",
            background: am5.RoundedRectangle.new(root, {
                fill: am5.color(0xffffff),
                fillOpacity: 0.2
            }),
            visible: false
        }));

        backContainer.children.push(am5.Label.new(root, {
            text: "Back",
            centerY: am5.p50,
            fill: am5.color(0xffffff)
        }));

        backContainer.children.push(am5.Graphics.new(root, {
            width: 32,
            height: 32,
            centerY: am5.p50,
            fill: am5.color(0xffffff),
            svgPath: "M12 9.059V6.5a1.001 1.001 0 0 0-1.707-.708L4 12l6.293 6.207a.997.997 0 0 0 1.414 0A.999.999 0 0 0 12 17.5v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"
        }));

        backContainer.events.on("click", function () {
            goHome();
        });

        return () => {
            root.dispose();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='mb-[4rem] h-[100vh]'>
            <div className='w-[100%] h-[100vh] fixed top-0 left-0'>

                <div className={classNames(
                    choosedCountry.title ? 'opacity-100' : 'opacity-0',
                    'transition-opacity ease-in-out delay-150 duration-300'
                )}>
                    <div
                        className={
                            classNames(
                                'transition absolute bg-black/30 w-80 h-full text-white pt-20',
                                'backdrop-blur-md px-4 py-8 space-y-4 shadow-md z-10 duration-500',
                                shownavigate ? 'translate-x-0' : '-translate-x-full'
                            )}
                        style={{
                            boxShadow: "0 1px 2px rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15)"
                        }}
                    >
                        {/* <div className='text-center'>
                                    {t('ulaanbaatar')} - {t(choosedCountry.id)}
                                </div> */}
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <div
                                    style={{ backgroundImage: `url(${choosedCountry.image})` }}
                                    className='rounded-md bg-cover bg-center bg-no-repeat h-44 w-full'
                                >
                                    {/* <img src={choosedCountry.image ?? "/image/main/plane-500.jpg"} alt=""
                                                className="rounded-md h-60"
                                            /> */}
                                </div>
                                <div className='text-justify text-sm mt-4'>
                                    {t(choosedCountry.id + 'desc')}
                                </div>
                            </div>
                            <div>
                                <div className='absolute right-[20%] pt-3 font-bold'>
                                    {t(choosedCountry.id)}
                                </div>
                                <div className='absolute bottom-[12rem] left-[10px]'>
                                    <div className='flex items-center bg-black/30 p-2 rounded backdrop-blur-md'>
                                        <div className='text-xs'>Distance: &nbsp;</div>
                                        <div className='text-sm'>{choosedCountry.distance}</div>
                                    </div>
                                    <span className="relative flex h-3 w-3 mx-auto -z-[1]">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                        <span className="relative h-3 w-3 rounded-full bg-sky-500"></span>
                                    </span>
                                </div>
                                <img src="/logos/some/flight2.png" alt="" className='h-64' />
                                <div className='absolute bottom-[3rem] left-[20%] font-bold'>
                                    {t('ulaanbaatar')}
                                </div>
                                <div className='absolute bottom-[6rem] right-[5px] bg-black/30 p-2 rounded backdrop-blur-md'>
                                    <div className='text-xs'>Total travel time: </div>
                                    <div className='text-sm'>{choosedCountry.duration}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={
                        classNames(
                            'transition absolute left-80 top-[calc(50%-24px)] block z-10 duration-500',
                            shownavigate ? 'translate-x-0' : '-translate-x-80'
                        )
                    }>
                        <button
                            className={classNames(
                                'h-[48px] w-[23px] bg-black/30 backdrop-blur-md cursor-pointer hover:bg-primary-700',
                                'rounded-r-full border-l border-l-primary-600'
                            )}
                            style={{
                                boxShadow: '0 1px 2px rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15)'
                            }}
                            onClick={clickShowNavigate}
                        >
                            {shownavigate ? <ChevronLeftIcon className='h-4 w-4 text-white' /> : <ChevronRightIcon className='h-4 w-4 text-white' />}
                        </button>
                    </div>
                </div>
                <div id="chartdiv" className="h-[100vh]"></div>
                <div className="bg"></div>
                <div className="star-field">
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                </div>
                <div className='h-[100px] fixed bottom-2 right-12'>
                    <img src="/image/main/partners.png" alt="" className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Destinations