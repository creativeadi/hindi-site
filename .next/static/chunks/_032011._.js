(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_032011._.js", {

"[project]/public/assets/map.png [app-client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/map.c18a09fe.png");}}),
"[project]/public/assets/map.png.mjs { IMAGE => \"[project]/public/assets/map.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$map$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/assets/map.png [app-client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$map$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 899,
    height: 1025,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/ABQXBiBybyerXFIlfAwLBRAAAAAAAAAAAAAAAAAABAUCB2hOKXygdjvLFRQKHgAAAAABAQABBQQDBQArIhUtl2s9tsCSWudNQChbKycTPVczKGBsUDZ6AItyS5bYtn772LZ//s2lbfOgaTjTjmlEoks6JloAfGVChsibZuzQpGv/0qdu+4xlPq0jGxEnDAoGDQARDQgRnWxAwMOIVPuObUatGxYPIQAAAAAAAAAAAAIBAQJsUzV5uXxL5ygbEDUAAAAAAAAAAAAAAAAAAAAAACogFC6FYDyfDwoGFQAAAAAAAAAAAAAAADqqOxFYl9SjAAAAAElFTkSuQmCC",
    blurWidth: 7,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Album_one.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const ImageSlider = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const albumImages = [
        {
            src: '/assets/images/hindidiwas/1.jpeg',
            name: 'Hindi Diwas'
        },
        {
            src: '/assets/images/hindidiwas/2.jpeg',
            name: 'Hindi Diwas'
        },
        {
            src: '/assets/images/hindidiwas/3.jpeg',
            name: 'Hindi Diwas'
        },
        {
            src: '/assets/images/hindidiwas/4.jpeg',
            name: 'Hindi Diwas'
        }
    ];
    const handleNext = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1) % albumImages.length);
    };
    const handlePrev = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex - 1 + albumImages.length) % albumImages.length);
    };
    // Hook to check if the screen is mobile-sized
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth <= 768); // Mobile screen size threshold
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...styles.sliderContainer,
            flexDirection: isMobile ? "column" : "row"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handlePrev,
                style: {
                    ...styles.button,
                    left: isMobile ? "10px" : "-30px",
                    top: isMobile ? "50%" : "50%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronLeft"], {}, void 0, false, {
                    fileName: "[project]/components/Album_one.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Album_one.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...styles.polaroidWrapper,
                    width: isMobile ? "90%" : "280px",
                    padding: isMobile ? "10px" : "10px 10px 30px",
                    height: isMobile ? "400px" : "380px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: albumImages[currentIndex].src,
                        alt: `Image ${currentIndex + 1}`,
                        width: isMobile ? 350 : 700,
                        height: isMobile ? 400 : 800,
                        style: {
                            ...styles.polaroidImage,
                            width: isMobile ? "300px" : "300px",
                            height: isMobile ? "350px" : "300px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Album_one.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...styles.caption,
                            fontSize: isMobile ? "20px" : "35px"
                        },
                        children: albumImages[currentIndex].name
                    }, void 0, false, {
                        fileName: "[project]/components/Album_one.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Album_one.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleNext,
                style: {
                    ...styles.button,
                    right: isMobile ? "10px" : "-30px",
                    top: isMobile ? "50%" : "50%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {}, void 0, false, {
                    fileName: "[project]/components/Album_one.jsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Album_one.jsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Album_one.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
};
_s(ImageSlider, "WUuONrZVvb4hS50C0Rmfu9q1Pbc=");
_c = ImageSlider;
const styles = {
    sliderContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative"
    },
    polaroidWrapper: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center"
    },
    polaroidImage: {
        borderRadius: "8px",
        border: "5px solid #fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        objectFit: "cover"
    },
    caption: {
        marginTop: "8px",
        fontFamily: "'Samarka', cursive",
        color: "#333"
    },
    button: {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "24px",
        padding: "10px",
        color: "#000",
        position: "absolute",
        zIndex: 2,
        transform: "translateY(-50%)",
        transition: "transform 0.3s, opacity 0.3s"
    },
    buttonHover: {
        transform: "scale(1.2)"
    }
};
const __TURBOPACK__default__export__ = ImageSlider;
var _c;
__turbopack_refresh__.register(_c, "ImageSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/KavyanjaliSec.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const ImageSlider = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const albumImages = [
        {
            src: '/assets/images/kavyanjali/1.jpeg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/2.jpeg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/3.jpeg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/4.jpeg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/5.jpeg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/6.jpeg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/7.jpg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/8.jpg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/9.jpg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/10.jpg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/11.jpg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/12.jpg',
            name: 'Kavyanjali'
        },
        {
            src: '/assets/images/kavyanjali/13.jpg',
            name: 'Kavyanjali'
        }
    ];
    const handleNext = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1) % albumImages.length);
    };
    const handlePrev = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex - 1 + albumImages.length) % albumImages.length);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...styles.sliderContainer,
            flexDirection: isMobile ? "column" : "row"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handlePrev,
                style: {
                    ...styles.button,
                    left: isMobile ? "10px" : "-30px",
                    top: isMobile ? "50%" : "50%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronLeft"], {}, void 0, false, {
                    fileName: "[project]/components/KavyanjaliSec.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/KavyanjaliSec.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...styles.polaroidWrapper,
                    width: isMobile ? "90%" : "280px",
                    padding: isMobile ? "10px" : "10px 10px 30px",
                    height: isMobile ? "400px" : "380px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: albumImages[currentIndex].src,
                        alt: `Image ${currentIndex + 1}`,
                        width: isMobile ? 350 : 700,
                        height: isMobile ? 400 : 800,
                        style: {
                            ...styles.polaroidImage,
                            width: isMobile ? "300px" : "300px",
                            height: isMobile ? "350px" : "300px",
                            objectFit: "cover"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/KavyanjaliSec.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...styles.caption,
                            fontSize: isMobile ? "20px" : "35px"
                        },
                        children: albumImages[currentIndex].name
                    }, void 0, false, {
                        fileName: "[project]/components/KavyanjaliSec.jsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/KavyanjaliSec.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleNext,
                style: {
                    ...styles.button,
                    right: isMobile ? "10px" : "-30px",
                    top: isMobile ? "50%" : "50%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {}, void 0, false, {
                    fileName: "[project]/components/KavyanjaliSec.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/KavyanjaliSec.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/KavyanjaliSec.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
_s(ImageSlider, "WUuONrZVvb4hS50C0Rmfu9q1Pbc=");
_c = ImageSlider;
const styles = {
    sliderContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative"
    },
    polaroidWrapper: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center"
    },
    polaroidImage: {
        borderRadius: "8px",
        border: "5px solid #fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"
    },
    caption: {
        marginTop: "8px",
        fontFamily: "'Samarka', cursive",
        color: "#333"
    },
    button: {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "24px",
        padding: "10px",
        color: "#000",
        position: "absolute",
        zIndex: 2,
        transform: "translateY(-50%)",
        transition: "transform 0.3s, opacity 0.3s"
    },
    buttonHover: {
        transform: "scale(1.2)"
    }
};
const __TURBOPACK__default__export__ = ImageSlider;
var _c;
__turbopack_refresh__.register(_c, "ImageSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Rangotsav.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const ImageSlider = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const albumImages = [
        {
            src: '/assets/images/rangotsav/1.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/2.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/4.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/3.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/4.1.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/4.2.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/4.3.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/4.4.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/5.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/6.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/7.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/8.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/9.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/12.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/10.jpg',
            name: 'Rangotsav '
        },
        {
            src: '/assets/images/rangotsav/11.jpg',
            name: 'Rangotsav '
        }
    ];
    const handleNext = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1) % albumImages.length);
    };
    const handlePrev = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex - 1 + albumImages.length) % albumImages.length);
    };
    // Hook to check if the screen is mobile-sized
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth <= 768); // Mobile screen size threshold
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...styles.sliderContainer,
            flexDirection: isMobile ? "column" : "row"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handlePrev,
                style: {
                    ...styles.button,
                    left: isMobile ? "10px" : "120px",
                    top: isMobile ? "50%" : "50%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronLeft"], {}, void 0, false, {
                    fileName: "[project]/components/Rangotsav.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Rangotsav.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...styles.polaroidWrapper,
                    width: isMobile ? "90%" : "280px",
                    padding: isMobile ? "10px" : "10px 10px 30px",
                    height: isMobile ? "400px" : "380px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: albumImages[currentIndex].src,
                        alt: `Image ${currentIndex + 1}`,
                        width: isMobile ? 350 : 700,
                        height: isMobile ? 400 : 800,
                        style: {
                            ...styles.polaroidImage,
                            width: isMobile ? "300px" : "300px",
                            height: isMobile ? "350px" : "300px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Rangotsav.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...styles.caption,
                            fontSize: isMobile ? "20px" : "35px"
                        },
                        children: albumImages[currentIndex].name
                    }, void 0, false, {
                        fileName: "[project]/components/Rangotsav.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Rangotsav.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleNext,
                style: {
                    ...styles.button,
                    right: isMobile ? "10px" : "120px",
                    top: isMobile ? "50%" : "50%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {}, void 0, false, {
                    fileName: "[project]/components/Rangotsav.jsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Rangotsav.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Rangotsav.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
};
_s(ImageSlider, "WUuONrZVvb4hS50C0Rmfu9q1Pbc=");
_c = ImageSlider;
const styles = {
    sliderContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative"
    },
    polaroidWrapper: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center"
    },
    polaroidImage: {
        borderRadius: "8px",
        border: "5px solid #fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        objectFit: "cover"
    },
    caption: {
        marginTop: "8px",
        fontFamily: "'Samarka', cursive",
        color: "#333"
    },
    button: {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "24px",
        padding: "10px",
        color: "#000",
        position: "absolute",
        zIndex: 2,
        transform: "translateY(-50%)",
        transition: "transform 0.3s, opacity 0.3s"
    },
    buttonHover: {
        transform: "scale(1.2)"
    }
};
const __TURBOPACK__default__export__ = ImageSlider;
var _c;
__turbopack_refresh__.register(_c, "ImageSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Photo.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$map$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$map$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/public/assets/map.png.mjs { IMAGE => "[project]/public/assets/map.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Album_one$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Album_one.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KavyanjaliSec$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/KavyanjaliSec.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Rangotsav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Rangotsav.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
// Custom hook to detect screen size
const useScreenSize = ()=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkScreenSize = ()=>{
            setIsMobile(window.innerWidth <= 768); // Consider <= 768px as mobile
        };
        // Initial check
        checkScreenSize();
        // Add event listener for window resize
        window.addEventListener("resize", checkScreenSize);
        // Cleanup the event listener on component unmount
        return ()=>window.removeEventListener("resize", checkScreenSize);
    }, []);
    return isMobile;
};
_s(useScreenSize, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
// Component styles
const styles = {
    container: {
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    imageWrapper: {
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        paddingLeft: "20px"
    },
    image: {
        objectFit: "cover",
        height: "auto"
    },
    caption: {
        marginTop: "1px",
        fontSize: "80px",
        fontFamily: "'Samarka', cursive",
        color: "#333",
        textAlign: "center"
    },
    overlay: {
        width: "90%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    albumWrapper: {
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "30px",
        display: "flex",
        flexDirection: "column"
    },
    albumItem: {
        width: "calc(100% - 10px)",
        boxSizing: "border-box"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    sideBySide: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "20px"
    },
    halfWidth: {
        width: "50%"
    }
};
const PhotoWithOverlay = ()=>{
    _s1();
    const isMobile = useScreenSize();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...styles.container,
            flexDirection: isMobile ? "column" : "row",
            justifyContent: isMobile ? "flex-start" : "space-between"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...styles.imageWrapper,
                    ...!isMobile ? styles.halfWidth : {}
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$map$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$map$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "Map of India",
                    style: styles.image,
                    width: isMobile ? 600 : 800,
                    height: isMobile ? 300 : 400
                }, void 0, false, {
                    fileName: "[project]/components/Photo.jsx",
                    lineNumber: 106,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Photo.jsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...styles.overlay,
                    ...!isMobile ? styles.halfWidth : {}
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            ...styles.caption,
                            fontSize: isMobile ? "40px" : "80px"
                        },
                        children: "Photo Album"
                    }, void 0, false, {
                        fileName: "[project]/components/Photo.jsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...styles.albumWrapper,
                            padding: isMobile ? "10px" : "30px",
                            flexDirection: isMobile ? "column" : "row",
                            gap: isMobile ? "20px" : "40px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.albumItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Album_one$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/Photo.jsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Photo.jsx",
                                lineNumber: 126,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.albumItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KavyanjaliSec$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/Photo.jsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Photo.jsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Photo.jsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...styles.albumWrapper,
                            padding: isMobile ? "10px" : "30px",
                            flexDirection: isMobile ? "column" : "row",
                            gap: isMobile ? "20px" : "20px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...styles.albumItem,
                                width: "100%"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Rangotsav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Photo.jsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Photo.jsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Photo.jsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Photo.jsx",
                lineNumber: 114,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Photo.jsx",
        lineNumber: 98,
        columnNumber: 9
    }, this);
};
_s1(PhotoWithOverlay, "RibnaXY/TLUBUO2hJCV15q5NlY4=", false, function() {
    return [
        useScreenSize
    ];
});
_c = PhotoWithOverlay;
const __TURBOPACK__default__export__ = PhotoWithOverlay;
var _c;
__turbopack_refresh__.register(_c, "PhotoWithOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Teams.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Home() {
    _s();
    var _s1 = __turbopack_refresh__.signature();
    const profiles = [
        {
            src: "/assets/teams/ayushraj.png",
            name: "Ayush Raj",
            designation: "Secretary",
            linkedin: "https://www.linkedin.com/in/ayush-raj-295a88223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/theayushrajsingh/"
        },
        {
            src: "/assets/teams/veer.png",
            name: "Dharambir Singh",
            designation: "President",
            linkedin: "https://www.linkedin.com/in/dharmbir-singh-4a1ab024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            instagram: "https://www.instagram.com/_.dharmveer/profilecard/?igsh=MXRldzB3MnNtdjA2ZQ=="
        },
        {
            src: "/assets/teams/dheeraj.png",
            name: "Dheeraj Saraswat",
            designation: "Vice President",
            linkedin: "http://www.linkedin.com/in/dheeraj-saraswat04",
            instagram: "https://www.instagram.com/dheerajj_sarswat/profilecard/?igsh=MXc2cTM1MGZpM2R1Yw=="
        },
        {
            src: "/assets/teams/ayush.png",
            name: "Ayush Raj",
            designation: "Event Management, Team Lead",
            linkedin: "https://www.linkedin.com/in/ayushrajspeaks",
            instagram: "https://www.instagram.com/dontstalkayush/profilecard/?igsh=MWtvYTRjenFhYTQwYQ=="
        },
        {
            src: "/assets/teams/vardhan.jpg",
            name: "Harsh Chandawat",
            designation: "Event Management, Team Lead",
            linkedin: "https://www.linkedin.com/in/harshvardhan-singh-2a13a7250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/beingwicked_99?igsh=ZTRjMHphNzNhZzQ4"
        },
        {
            src: "/assets/teams/Vishwas.png",
            name: "Vishwash Chouhan",
            designation: "Event Management, Team Co-Lead",
            linkedin: "https://www.linkedin.com/in/vishwas-chouhan-82663828a/",
            instagram: "https://www.instagram.com/vishwas_chouhan14?igsh=enNldjBreDlocXA2"
        },
        {
            src: "/assets/teams/rhythm.png",
            name: "Rhythm Dhangar",
            designation: "Event Management, Team Co-Lead",
            linkedin: "https://www.linkedin.com/in/rhythm-dhangar-49b733289/",
            instagram: "https://www.instagram.com/justrhythm_/"
        },
        {
            src: "/assets/teams/Palak.png",
            name: "Palak Mehra",
            designation: "Design, Team Lead",
            linkedin: "https://www.linkedin.com/in/palak-mehra-808a112b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/palakkmehraa?utm_source=qr&igsh=MXQ2cTlkZWt4Mmw5eg=="
        },
        {
            src: "/assets/teams/chirag.png",
            name: "Chirag Yadav",
            designation: "Design, Team Co-Lead",
            linkedin: "",
            instagram: ""
        },
        {
            src: "/assets/teams/harsh.png",
            name: "Harsh Aditya",
            designation: "Technical, Team Lead",
            linkedin: "https://www.linkedin.com/in/harsh-aditya-354aa4251/",
            instagram: "https://www.instagram.com/harshhaditya/"
        },
        {
            src: "/assets/teams/Garv.png",
            name: "Garv Anand",
            designation: "Technical, Team Co-Lead",
            linkedin: "https://www.linkedin.com/in/garv-anand-1bb36b270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/garv_anand_/profilecard/?igsh=MWlzMm5sbHk5ejkwMA=="
        },
        {
            src: "/assets/teams/Manav.png",
            name: "Manav Wagh",
            designation: "Social Media, Team Lead",
            linkedin: "https://www.linkedin.com/in/manav-wagh-556687304/",
            instagram: "https://www.instagram.com/manavvwagh01?igsh=MTF1YmtveTRxZ3N4Nw%3D%3D&utm_source=qr"
        },
        {
            src: "/assets/teams/Milind.png",
            name: "Milind Verma",
            designation: "PR & Outreach, Team Lead",
            linkedin: "https://www.linkedin.com/in/milind-verma-8aa10a308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/_itsmilindd/profilecard/?igsh=bGw5bWQ5ejJ5cGs5"
        },
        {
            src: "/assets/teams/arya.png",
            name: "Kumar Arya",
            designation: "PR & Outreach, Team Co-Lead",
            linkedin: "https://www.linkedin.com/in/kumar-arya-725b42331/",
            instagram: "https://www.instagram.com/aryaaa_kr/"
        }
    ];
    const useScreenSize = ()=>{
        _s1();
        const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            const checkScreenSize = ()=>{
                setIsMobile(window.innerWidth <= 768); // Consider <= 768px as mobile
            };
            // Initial check
            checkScreenSize();
            // Add event listener for window resize
            window.addEventListener("resize", checkScreenSize);
            // Cleanup the event listener on component unmount
            return ()=>window.removeEventListener("resize", checkScreenSize);
        }, []);
        return isMobile;
    };
    _s1(useScreenSize, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
    const faculty = [
        {
            src: "/assets/teams/rajeev.png",
            name: "Dr. Rajeev Saxena",
            designation: "Faculty Co-Ordinator",
            linkedin: "https://www.linkedin.com/in/rajeev-saxena-9763871a/",
            instagram: ""
        }
    ];
    const styles = {
        caption: {
            marginTop: "8px",
            fontSize: "80px",
            fontFamily: "'Samarka', cursive",
            color: "#333",
            textAlign: "center"
        }
    };
    const isMobile = useScreenSize();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-[linear-gradient(179.56deg,#FFA134_0.36%,#FFB259_99.6%)] py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    ...styles.caption,
                    fontSize: isMobile ? "40px" : "80px"
                },
                children: "Meet Our Team"
            }, void 0, false, {
                fileName: "[project]/components/Teams.jsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-wrap gap-8 justify-center items-center ${isMobile ? 'p-4' : ''}`,
                children: faculty.map((profile, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative group ${isMobile ? 'w-96' : 'w-96'} hover:translate-y-[-4px] hover:shadow-xl transition-transform duration-300 mb-4`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-96 bg-gradient-to-b from-[#FFE7B3] to-[#FFDAB8] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "rounded-full",
                                        src: profile.src,
                                        alt: profile.name,
                                        width: 300,
                                        height: 300
                                    }, void 0, false, {
                                        fileName: "[project]/components/Teams.jsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold mt-4 text-gray-800",
                                        children: profile.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Teams.jsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 text-center",
                                        children: profile.designation
                                    }, void 0, false, {
                                        fileName: "[project]/components/Teams.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Teams.jsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-full top-full bg-gray opacity-70 backdrop-blur-sm rounded-b-[2.25rem] rounded-t-none flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex gap-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: profile.linkedin,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "bg-white p-2 rounded-full shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
                                            fileName: "[project]/components/Teams.jsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Teams.jsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Teams.jsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Teams.jsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/Teams.jsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Teams.jsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/components/Teams.jsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/components/Teams.jsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-wrap gap-8 justify-center items-center ${isMobile ? 'p-4' : ''}`,
                children: profiles.map((profile, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative group ${isMobile ? 'w-96' : 'w-96'} hover:translate-y-[-4px] hover:shadow-xl transition-transform duration-300 mb-4`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-96 bg-gradient-to-b from-[#FFE7B3] to-[#FFDAB8] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "rounded-full",
                                        src: profile.src,
                                        alt: profile.name,
                                        width: 300,
                                        height: 300
                                    }, void 0, false, {
                                        fileName: "[project]/components/Teams.jsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold mt-4 text-gray-800",
                                        children: profile.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Teams.jsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 text-center",
                                        children: profile.designation
                                    }, void 0, false, {
                                        fileName: "[project]/components/Teams.jsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Teams.jsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-full top-full bg-gray opacity-70 backdrop-blur-sm rounded-b-[2.25rem] rounded-t-none flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: profile.linkedin,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "bg-white p-2 rounded-full shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
                                                fileName: "[project]/components/Teams.jsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Teams.jsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: profile.instagram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "bg-white p-2 rounded-full shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                                                fileName: "[project]/components/Teams.jsx",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Teams.jsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Teams.jsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Teams.jsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/Teams.jsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Teams.jsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Teams.jsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(Home, "RibnaXY/TLUBUO2hJCV15q5NlY4=", true);
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/End.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
// Hook to determine screen size
const useScreenSize = ()=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkScreenSize = ()=>{
            setIsMobile(window.innerWidth <= 768); // Mobile screen size threshold
        };
        // Initial check
        checkScreenSize();
        // Add resize listener
        window.addEventListener("resize", checkScreenSize);
        // Cleanup on unmount
        return ()=>window.removeEventListener("resize", checkScreenSize);
    }, []);
    return isMobile;
};
_s(useScreenSize, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
function End() {
    _s1();
    const isMobile = useScreenSize(); // Determine screen size
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...styles.container,
            minHeight: "100vh",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.caption,
                children: "Vasudhaiva Kutumbakam"
            }, void 0, false, {
                fileName: "[project]/components/End.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.imageContainer,
                children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/images/last.png" // Replace with your mobile image path
                    ,
                    alt: "Mobile View Image",
                    width: 800,
                    height: 500
                }, void 0, false, {
                    fileName: "[project]/components/End.jsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/img.png" // Replace with your laptop image path
                    ,
                    alt: "Laptop View Image",
                    width: 1000,
                    height: 100
                }, void 0, false, {
                    fileName: "[project]/components/End.jsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/End.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/End.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s1(End, "RibnaXY/TLUBUO2hJCV15q5NlY4=", false, function() {
    return [
        useScreenSize
    ];
});
_c = End;
// Styles
const styles = {
    container: {
        display: "flex",
        width: "100vw",
        height: "100vh",
        backgroundImage: `linear-gradient(0.36deg, rgba(255, 161, 52, 0.5) 0.36%, rgba(255, 178, 89, 0.5) 99.6%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    },
    caption: {
        marginTop: "8px",
        fontSize: "80px",
        fontFamily: "'Samarka', cursive",
        color: "#333",
        textAlign: "center"
    },
    imageContainer: {
        marginTop: "40px",
        display: "flex",
        justifyContent: "center"
    }
};
const __TURBOPACK__default__export__ = End;
var _c;
__turbopack_refresh__.register(_c, "End");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/WebTeam.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Home() {
    _s();
    var _s1 = __turbopack_refresh__.signature();
    const profiles = [
        {
            src: "/assets/teams/ad1.png",
            name: "Aman Deep Singh",
            designation: "Technical, Member",
            linkedin: "https://www.linkedin.com/in/aman-deep-singh-180aa2251/",
            instagram: "https://www.instagram.com/a.d_singhhh/profilecard/?igsh=MWZ5NG02NHVvcjljOQ=="
        },
        {
            src: "/assets/teams/anvay.png",
            name: "Anvaya Arsha",
            designation: "Website Designer",
            linkedin: "https://www.linkedin.com/in/anvaya-arsha-761037252/",
            instagram: ""
        },
        {
            src: "/assets/teams/sujal.png",
            name: "Sujal Sakhare",
            designation: "Technical, Member",
            linkedin: "https://www.linkedin.com/in/sujal-s-286b33258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            instagram: "https://www.instagram.com/sujallll.s?igsh=MXJicHd2amg5d3Y5cg%3D%3D&utm_source=qr"
        }
    ];
    const President = [
        {
            src: "/assets/teams/veer.png",
            name: "Dharambir Singh",
            designation: "President",
            linkedin: "https://www.linkedin.com/in/dharmbir-singh-4a1ab024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            instagram: "https://www.instagram.com/_.dharmveer/profilecard/?igsh=MXRldzB3MnNtdjA2ZQ=="
        },
        {
            src: "/assets/teams/harsh.png",
            name: "Harsh Aditya",
            designation: "Technical, Team Lead",
            linkedin: "https://www.linkedin.com/in/harsh-aditya-354aa4251/",
            instagram: "https://www.instagram.com/harshhaditya/"
        },
        {
            src: "/assets/teams/Garv.png",
            name: "Garv Anand",
            designation: "Technical, Team Co-Lead",
            linkedin: "https://www.linkedin.com/in/garv-anand-1bb36b270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/garv_anand_/profilecard/?igsh=MWlzMm5sbHk5ejkwMA=="
        }
    ];
    const useScreenSize = ()=>{
        _s1();
        const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            const checkScreenSize = ()=>{
                setIsMobile(window.innerWidth <= 768); // Consider <= 768px as mobile
            };
            // Initial check
            checkScreenSize();
            // Add event listener for window resize
            window.addEventListener("resize", checkScreenSize);
            // Cleanup the event listener on component unmount
            return ()=>window.removeEventListener("resize", checkScreenSize);
        }, []);
        return isMobile;
    };
    _s1(useScreenSize, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
    const styles = {
        caption: {
            marginTop: "0px",
            fontSize: "80px",
            fontFamily: "'Samarka', cursive",
            color: "#333",
            textAlign: "center"
        }
    };
    const isMobile = useScreenSize();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen flex flex-col items-center justify-center bg-[linear-gradient(179.56deg,#FFA134_0.36%,#FFB259_99.6%)] py-4`,
        style: {
            marginBottom: isMobile ? "10px" : "40px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    ...styles.caption,
                    fontSize: isMobile ? "40px" : "80px",
                    marginBottom: isMobile ? "20px" : "40px"
                },
                children: "Website Development Team"
            }, void 0, false, {
                fileName: "[project]/components/WebTeam.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-wrap gap-8 justify-center items-center ${isMobile ? 'p-4' : ''}`,
                style: {
                    marginTop: "20px",
                    marginBottom: "10px"
                },
                children: President.map((profile, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative group ${isMobile ? 'w-96' : 'w-96'} hover:translate-y-[-4px] hover:shadow-xl transition-transform duration-300 mb-4`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-96 bg-gradient-to-b from-[#FFE7B3] to-[#FFDAB8] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "rounded-full",
                                        src: profile.src,
                                        alt: profile.name,
                                        width: 300,
                                        height: 300
                                    }, void 0, false, {
                                        fileName: "[project]/components/WebTeam.jsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold mt-4 text-gray-800",
                                        children: profile.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/WebTeam.jsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 text-center",
                                        children: profile.designation
                                    }, void 0, false, {
                                        fileName: "[project]/components/WebTeam.jsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WebTeam.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-full top-full bg-gray opacity-70 backdrop-blur-sm rounded-b-[2.25rem] rounded-t-none flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: profile.linkedin,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "bg-white p-2 rounded-full shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
                                                fileName: "[project]/components/WebTeam.jsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/WebTeam.jsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: President.instagram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "bg-white p-2 rounded-full shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                                                fileName: "[project]/components/WebTeam.jsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/WebTeam.jsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WebTeam.jsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WebTeam.jsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/WebTeam.jsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/WebTeam.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/components/WebTeam.jsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/components/WebTeam.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-wrap gap-8 justify-center items-center ${isMobile ? 'p-4' : ''}`,
                children: profiles.map((profile, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative group ${isMobile ? 'w-96' : 'w-96'} hover:translate-y-[-4px] hover:shadow-xl transition-transform duration-300 mb-4`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-96 bg-gradient-to-b from-[#FFE7B3] to-[#FFDAB8] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "rounded-full",
                                        src: profile.src,
                                        alt: profile.name,
                                        width: 300,
                                        height: 300
                                    }, void 0, false, {
                                        fileName: "[project]/components/WebTeam.jsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold mt-4 text-gray-800",
                                        children: profile.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/WebTeam.jsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 text-center",
                                        children: profile.designation
                                    }, void 0, false, {
                                        fileName: "[project]/components/WebTeam.jsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WebTeam.jsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-full top-full bg-gray opacity-70 backdrop-blur-sm rounded-b-[2.25rem] rounded-t-none flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: profile.linkedin,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "bg-white p-2 rounded-full shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
                                                fileName: "[project]/components/WebTeam.jsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/WebTeam.jsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: profile.instagram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "bg-white p-2 rounded-full shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                                                fileName: "[project]/components/WebTeam.jsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/WebTeam.jsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WebTeam.jsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WebTeam.jsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/WebTeam.jsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/WebTeam.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WebTeam.jsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(Home, "RibnaXY/TLUBUO2hJCV15q5NlY4=", true);
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/eventsection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const BoxDesign = ({ pattern, altText, title, description })=>{
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md mx-auto relative overflow-hidden rounded-lg group cursor-pointer transform transition-all duration-500 hover:scale-105",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: pattern,
                alt: altText,
                width: 500,
                height: 176,
                className: "w-full h-36 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            }, void 0, false, {
                fileName: "[project]/components/eventsection.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-50 group-hover:opacity-80 transition-all duration-300"
            }, void 0, false, {
                fileName: "[project]/components/eventsection.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center p-4 transform transition-all duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `text-white text-2xl mb-2 text-center transform transition-all duration-500 ${isHovered ? 'scale-110 -translate-y-2' : 'scale-100'}`,
                        style: {
                            fontFamily: 'Samarkan, cursive',
                            textShadow: '3px 3px 6px rgba(0,0,0,0.9)'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/eventsection.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-white/90 text-sm font-sans text-center max-w-md transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`,
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/eventsection.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eventsection.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 border-2 border-orange-300/0 group-hover:border-orange-300/50 rounded-lg transition-all duration-500"
            }, void 0, false, {
                fileName: "[project]/components/eventsection.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eventsection.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_s(BoxDesign, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = BoxDesign;
const HindiEvents = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group mb-12 max-w-3xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-xy"
            }, void 0, false, {
                fileName: "[project]/components/eventsection.jsx",
                lineNumber: 48,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative px-8 py-8 bg-gradient-to-r from-orange-300 via-red-200 to-orange-300 rounded-lg ring-1 ring-orange-400/50 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-pattern opacity-0"
                        }, void 0, false, {
                            fileName: "[project]/components/eventsection.jsx",
                            lineNumber: 51,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eventsection.jsx",
                        lineNumber: 50,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "relative text-6xl text-orange-900 flex items-center justify-center gap-6 animate-float",
                        style: {
                            fontFamily: 'Samarkan'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-700 text-5xl relative animate-pulse",
                                children: [
                                    "✦",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inset-0 animate-ping",
                                        children: "✦"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eventsection.jsx",
                                        lineNumber: 59,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eventsection.jsx",
                                lineNumber: 57,
                                columnNumber: 9
                            }, this),
                            "Hindi Club Events",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-700 text-5xl relative animate-pulse",
                                children: [
                                    "✦",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inset-0 animate-ping",
                                        children: "✦"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eventsection.jsx",
                                        lineNumber: 64,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eventsection.jsx",
                                lineNumber: 62,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eventsection.jsx",
                        lineNumber: 53,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/components/eventsection.jsx",
                        lineNumber: 67,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full animate-bounce delay-300"
                    }, void 0, false, {
                        fileName: "[project]/components/eventsection.jsx",
                        lineNumber: 68,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eventsection.jsx",
                lineNumber: 49,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eventsection.jsx",
        lineNumber: 47,
        columnNumber: 3
    }, this);
_c1 = HindiEvents;
const ComingSoon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute -left-8 top-1/2 -translate-y-1/2 hover:translate-x-8 transition-transform duration-700",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-90 origin-center group animate-sway",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-5xl bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 text-white p-6 rounded-lg shadow-lg    hover:shadow-[0_0_30px_rgba(251,146,60,0.6)] transition-all duration-500 hover:scale-110 animate-gradient-x cursor-pointer   group-hover:animate-gradient-pulse relative overflow-hidden transform perspective-1000 hover:rotate-y-12",
                style: {
                    fontFamily: 'Samarkan'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative z-10 animate-float-slow group-hover:text-orange-200 transition-colors duration-300",
                        children: "Coming Soon"
                    }, void 0, false, {
                        fileName: "[project]/components/eventsection.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    }, void 0, false, {
                        fileName: "[project]/components/eventsection.jsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 blur opacity-0 group-hover:opacity-75 transition-all duration-500 animate-gradient-xy"
                    }, void 0, false, {
                        fileName: "[project]/components/eventsection.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    }, void 0, false, {
                        fileName: "[project]/components/eventsection.jsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eventsection.jsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/eventsection.jsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/eventsection.jsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
_c2 = ComingSoon;
const BowAndArrow = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute right-0 top-1/2 -translate-y-1/2 w-40 animate-bow group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/bow copy.png",
                    alt: "Bow and Arrow",
                    width: 160,
                    height: 160,
                    className: "w-full h-auto transform hover:scale-110 transition-all duration-300    group-hover:brightness-110 group-hover:contrast-125 filter    hover:drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]"
                }, void 0, false, {
                    fileName: "[project]/components/eventsection.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent    opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shine"
                }, void 0, false, {
                    fileName: "[project]/components/eventsection.jsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/eventsection.jsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/eventsection.jsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
_c3 = BowAndArrow;
const EventPage = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-ebc3d05f04b671b4" + " " + "min-h-screen relative bg-orange-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ebc3d05f04b671b4" + " " + "absolute inset-0 bg-pattern opacity-5"
            }, void 0, false, {
                fileName: "[project]/components/eventsection.jsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ebc3d05f04b671b4" + " " + "container mx-auto pl-16 pr-8 py-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-ebc3d05f04b671b4" + " " + "grid grid-cols-12 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-ebc3d05f04b671b4" + " " + "col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ebc3d05f04b671b4" + " " + "h-full flex items-center relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComingSoon, {}, void 0, false, {
                                    fileName: "[project]/components/eventsection.jsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/eventsection.jsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/eventsection.jsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-ebc3d05f04b671b4" + " " + "col-span-6 flex flex-col items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ebc3d05f04b671b4" + " " + "w-full space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HindiEvents, {}, void 0, false, {
                                        fileName: "[project]/components/eventsection.jsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ebc3d05f04b671b4" + " " + "space-y-6 w-full flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxDesign, {
                                                pattern: "/image.png",
                                                altText: "Kavyanjali Event",
                                                title: "Kavyanjali 2.0",
                                                description: "A celebration of poetry and literature"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eventsection.jsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxDesign, {
                                                pattern: "/p2.png",
                                                altText: "Rangotsav Event",
                                                title: "Rangotsav",
                                                description: "Festival of colors and creativity"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eventsection.jsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxDesign, {
                                                pattern: "/p3.png",
                                                altText: "Hindi Diwas Event",
                                                title: "Hindi Diwas",
                                                description: "Celebrating the Hindi language"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eventsection.jsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/eventsection.jsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eventsection.jsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/eventsection.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-ebc3d05f04b671b4" + " " + "col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ebc3d05f04b671b4" + " " + "h-full flex items-center relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BowAndArrow, {}, void 0, false, {
                                    fileName: "[project]/components/eventsection.jsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/eventsection.jsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/eventsection.jsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eventsection.jsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/eventsection.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "ebc3d05f04b671b4",
                children: ".bg-pattern{opacity:1;background-image:url(/bg.png);background-position:50%;background-size:cover;background-attachment:fixed}@keyframes sway{0%,to{transform:rotate(90deg)translate(0)}25%{transform:rotate(88deg)translate(5px)}75%{transform:rotate(92deg)translate(-5px)}}@keyframes float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}.animate-sway{animation:6s ease-in-out infinite sway}.animate-float-slow{animation:3s ease-in-out infinite float-slow}@keyframes bowMovement{0%{transform:translate(0)translateY(-50%)}25%{transform:translate(-10px)translateY(-52%)rotate(-2deg)}50%{transform:translate(-5px)translateY(-50%)rotate(0)}75%{transform:translate(-8px)translateY(-48%)rotate(2deg)}to{transform:translate(0)translateY(-50%)rotate(0)}}@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes gradient-x{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}@keyframes gradient-pulse{0%{background-size:100% 100%}50%{background-size:120% 120%}to{background-size:100% 100%}}.animate-bow{animation:4s ease-in-out infinite bowMovement}.animate-float{animation:3s ease-in-out infinite float}.animate-gradient-x{background-size:200% 200%;animation:3s infinite gradient-x}.animate-gradient-pulse{animation:2s ease-in-out infinite gradient-pulse}.animate-gradient-xy{background-size:400% 400%;animation:10s infinite gradient-x}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eventsection.jsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
_c4 = EventPage;
const __TURBOPACK__default__export__ = EventPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_refresh__.register(_c, "BoxDesign");
__turbopack_refresh__.register(_c1, "HindiEvents");
__turbopack_refresh__.register(_c2, "ComingSoon");
__turbopack_refresh__.register(_c3, "BowAndArrow");
__turbopack_refresh__.register(_c4, "EventPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_032011._.js.map