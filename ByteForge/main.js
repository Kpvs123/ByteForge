// main.js - Simulador Interactivo de Ensamblaje PC Paso a Paso

// ---------------------------------------------------------
// 1. DATOS DE COMPONENTES Y GUÍA EDUCATIVA
// ---------------------------------------------------------
const componentsData = {
    cpu: { 
        name: "CPU (Procesador)", 
        modalTitle: "Procesador AMD Ryzen AM4",
        category: "Procesamiento Central",
        icon: "⚡",
        highlight: "Microarquitectura x86-64 / 8 Núcleos",
        shortDesc: "Coordina y ejecuta todas las operaciones lógicas y del sistema.",
        price: "$180 - $220 USD",
        tdp: "65W TDP",
        compatibility: "Socket AM4 / Chipsets AMD B450, B550, X570",
        fullDesc: "El procesador se coloca con suavidad en el socket AM4 haciendo coincidir la marca dorada con el triángulo guía. Nunca fuerces la pieza: al alinearse correctamente, asienta sola y se asegura con la palanca metálica.",
        desc: "El cerebro del computador. Realiza todos los cálculos lógicos y aritméticos del sistema.",
        eduTip: "Alinea la pequeña marca triangular dorada en una de las esquinas del procesador con el triángulo del socket AM4. Se coloca suavemente sin forzar y se baja la palanca metálica de fijación.",
        status: "pending" 
    },
    ram: { 
        name: "Memoria RAM (DDR4)", 
        modalTitle: "Memoria RAM DDR4 Dual Channel (16GB)",
        category: "Memoria Principal",
        icon: "🚀",
        highlight: "Frecuencia 3200 MHz / Latencia CL16",
        shortDesc: "Almacenamiento volátil ultrarrápido para programas y juegos activos.",
        price: "$55 - $70 USD (Kit 2x8GB)",
        tdp: "~3.5W por módulo (1.35V)",
        compatibility: "Ranuras DIMM DDR4 (288 contactos) con soporte XMP/DOCP",
        fullDesc: "Para habilitar el modo Dual-Channel (duplicando el ancho de banda a 128 bits), instala los módulos en las ranuras alternas recomendadas (ranuras 2 y 4). Presiona parejo en ambos extremos hasta escuchar el 'clic' de los seguros plásticos.",
        desc: "Memoria de acceso aleatorio de alta velocidad donde se cargan los procesos activos.",
        eduTip: "Observa la muesca asimétrica (notch) en los contactos. Abre las pestañas laterales de las ranuras DIMM, alinea la muesca y presiona firmemente en ambos extremos hasta escuchar el 'clic' de bloqueo.",
        status: "pending" 
    },
    cooler: { 
        name: "Disipador / Cooler", 
        modalTitle: "Disipador de Torre con 4 Heatpipes de Cobre",
        category: "Refrigeración Térmica",
        icon: "❄️",
        highlight: "Ventilador PWM 120mm / 4 Tubos de Calor",
        shortDesc: "Evacua el calor concentrado del CPU para prevenir estrangulamiento térmico (thermal throttling).",
        price: "$35 - $50 USD",
        tdp: "Capacidad de disipación: hasta 180W / Ventilador: ~2.4W",
        compatibility: "Montaje universal AM4 / LGA 1200 / LGA 1700",
        fullDesc: "Aplica una pequeña gota de pasta térmica en el centro del procesador antes de posicionar el disipador. Atornilla los resortes en forma de cruz de manera progresiva para distribuir la pasta uniformemente sin burbujas de aire.",
        desc: "Disipa el calor generado por el procesador mediante tubos de calor de cobre (heatpipes), aletas de aluminio y ventilador.",
        eduTip: "Aplica una gota del tamaño de un guisante de pasta térmica en el centro del IHS del CPU. Coloca el disipador y aprieta los tornillos en patrón cruzado para distribuir la presión uniformemente.",
        status: "pending" 
    },
    gpu: { 
        name: "Tarjeta Gráfica (GPU)", 
        modalTitle: "Tarjeta Gráfica NVIDIA GeForce GTX 780",
        category: "Procesamiento Gráfico",
        icon: "🎮",
        highlight: "Arquitectura Kepler / Memoria GDDR5 VRAM",
        shortDesc: "Renderiza mundos 3D, texturas, iluminación compleja y cálculos de sombreado en tiempo real.",
        price: "~$140 USD (Ref)",
        tdp: "250W TDP (Requiere conectores 6+8 pines PCIe)",
        compatibility: "Ranura PCIe 3.0 / 4.0 x16 en la Placa Madre",
        fullDesc: "Instálala siempre en la primera ranura PCIe x16 (la más alta) para conectarse directamente a las líneas PCIe del CPU. Retira las tapas traseras del gabinete, alinea el conector y presiona hasta que la traba plástica se cierre automáticamente.",
        desc: "Procesa y renderiza gráficos 3D y video de alta fidelidad. Se conecta a la ranura PCIe x16.",
        eduTip: "Insértala en la primera ranura PCIe x16 (la más cercana al CPU) para obtener el máximo ancho de banda. Abre el seguro de la ranura, alinea los conectores traseros con el chasis y presiona hasta el clic.",
        status: "pending" 
    },
    psu: { 
        name: "Fuente de Poder (PSU)", 
        modalTitle: "Fuente de Poder 700W 80-Plus Bronze",
        category: "Suministro de Energía",
        icon: "🔌",
        highlight: "Certificación 80-Plus Bronze / Riel +12V Robusto",
        shortDesc: "Proporciona energía limpia y protegida contra sobrecargas a todos los módulos de la PC.",
        price: "$65 - $80 USD",
        tdp: "Entrega hasta 700W continuos / Eficiencia >85%",
        compatibility: "Factor de forma estándar ATX (Torre y Semitorre)",
        fullDesc: "La fuente debe colocarse con el ventilador hacia las rejillas de ventilación para asegurar flujo de aire independiente. Se atornilla con 4 tornillos hexagonales estándar. Sus cables principales son ATX 24 pines (motherboard), EPS 8 pines (CPU) y PCIe (GPU).",
        desc: "Convierte la corriente alterna de la toma eléctrica en voltajes continuos regulados (+12V, +5V, +3.3V).",
        eduTip: "Orienta el ventilador de la fuente hacia la rejilla de ventilación exterior para aspirar aire fresco. Fíjala firmemente con los 4 tornillos hexagonales en la parte posterior del gabinete.",
        status: "pending" 
    },
    storage: { 
        name: "Almacenamiento (SSD)", 
        modalTitle: "Unidad SSD SATA 2.5'' (480GB)",
        category: "Almacenamiento Masivo",
        icon: "💾",
        highlight: "Velocidad de Lectura 500 MB/s / Cero Ruido",
        shortDesc: "Guarda el sistema operativo y tus archivos con tiempos de carga prácticamente instantáneos.",
        price: "$30 - $45 USD",
        tdp: "~1.8W en uso intensivo / 0.2W en reposo",
        compatibility: "Bahías de 2.5'' y conexión SATA III (6 Gb/s)",
        fullDesc: "Las unidades de estado sólido no tienen piezas móviles, por lo que son inmunes a vibraciones. Se deslizan en su bandeja de montaje y requieren dos cables: el cable delgado de datos SATA conectado a la placa y el cable ancho de alimentación SATA desde la fuente.",
        desc: "Unidades de estado sólido de alta velocidad para albergar el sistema operativo y todos tus archivos.",
        eduTip: "Desliza la unidad en la bahía o bandeja metálica de 2.5''. Recuerda que requerirá dos conexiones: el cable de datos SATA a la motherboard y el cable de energía SATA desde la fuente.",
        status: "pending" 
    }
};

// ---------------------------------------------------------
// ---------------------------------------------------------
// 2. CONFIGURACIÓN VISUAL, TEMA HUD Y CONTROL ORBITAL
// ---------------------------------------------------------
const scene = new THREE.Scene();

// Gestión del Tema (Dark Gamer RGB por defecto)
let currentTheme = localStorage.getItem('pcbuilder_theme') || 'dark';

const themeConfigs = {
    dark: {
        background: 0x0a0b10,
        ambientIntensity: 1.20,
        hemiSky: 0xd0e6ff,
        hemiGround: 0x0a0b10,
        hemiIntensity: 0.85,
        keyIntensity: 1.0,
        fillColor: 0x00f0ff,
        fillIntensity: 0.60
    },
    light: {
        background: 0xf2f2f2,
        ambientIntensity: 1.35,
        hemiSky: 0xffffff,
        hemiGround: 0xd0d0d0,
        hemiIntensity: 1.05,
        keyIntensity: 0.85,
        fillColor: 0x0088cc,
        fillIntensity: 0.40
    }
};

const initialThemeCfg = themeConfigs[currentTheme] || themeConfigs.dark;
scene.background = new THREE.Color(initialThemeCfg.background);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0.6, 1.25, 3.0); 

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" }); 
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Tone Mapping cinematográfico
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputEncoding = THREE.sRGBEncoding;
document.getElementById('scene-container').appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.05;
controls.target.set(0, 0.92, 0);

// Rotación orbital automática desactivada por defecto para control manual total
controls.autoRotate = false;
controls.autoRotateSpeed = 0.55;

// Iluminación dinámica adaptable al tema
const ambientLight = new THREE.AmbientLight(0xffffff, initialThemeCfg.ambientIntensity); 
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(
    initialThemeCfg.hemiSky, 
    initialThemeCfg.hemiGround, 
    initialThemeCfg.hemiIntensity
);
hemiLight.position.set(0, 10, 0);
scene.add(hemiLight);

const keyLight = new THREE.DirectionalLight(0xffffff, initialThemeCfg.keyIntensity);
keyLight.position.set(5, 4, 6);
keyLight.target.position.set(0, 0.92, 0);
scene.add(keyLight);
scene.add(keyLight.target);

const fillLight = new THREE.DirectionalLight(initialThemeCfg.fillColor, initialThemeCfg.fillIntensity);
fillLight.position.set(-4, 3, 4);
fillLight.target.position.set(0, 0.92, 0);
scene.add(fillLight);
scene.add(fillLight.target);

const topLight = new THREE.DirectionalLight(0xffffff, 0.4);
topLight.position.set(0, 6, 1);
scene.add(topLight);

function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('pcbuilder_theme', theme);

    const cfg = themeConfigs[theme] || themeConfigs.dark;
    scene.background.set(cfg.background);
    ambientLight.intensity = cfg.ambientIntensity;
    hemiLight.color.set(cfg.hemiSky);
    hemiLight.groundColor.set(cfg.hemiGround);
    hemiLight.intensity = cfg.hemiIntensity;
    keyLight.intensity = cfg.keyIntensity;
    fillLight.color.set(cfg.fillColor);
    fillLight.intensity = cfg.fillIntensity;

    const iconEl = document.getElementById("theme-toggle-icon");
    const textEl = document.getElementById("theme-toggle-text");

    if (theme === 'light') {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        if (iconEl) iconEl.innerText = "☀️";
        if (textEl) textEl.innerText = "MODO CLARO";
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        if (iconEl) iconEl.innerText = "🌙";
        if (textEl) textEl.innerText = "MODO OSCURO";
    }
}

const pcGroup = new THREE.Group();
scene.add(pcGroup);

window.debugModels = { scene, pcGroup };

// ---------------------------------------------------------
// 3. MOTOR DE ANIMACIÓN (TWEEN con fallback integrado)
// ---------------------------------------------------------
const tweenManager = (typeof TWEEN !== 'undefined') ? TWEEN : {
    _tweens: [],
    Tween: function(target) {
        let _to = {}, _duration = 1000, _onComplete = null, _onUpdate = null, _startTime = null, _from = {};
        this.to = function(dest, dur) { _to = dest; _duration = dur || 1000; return this; };
        this.easing = function() { return this; };
        this.onUpdate = function(cb) { _onUpdate = cb; return this; };
        this.onComplete = function(cb) { _onComplete = cb; return this; };
        this.start = function() {
            _from = {};
            for (let k in _to) _from[k] = target[k];
            _startTime = performance.now();
            tweenManager._tweens.push(this);
            return this;
        };
        this.update = function(time) {
            const elapsed = Math.min((time - _startTime) / _duration, 1);
            const t = 1 - Math.pow(1 - elapsed, 3); // Cubic Out
            for (let k in _to) {
                target[k] = _from[k] + (_to[k] - _from[k]) * t;
            }
            if (_onUpdate) _onUpdate(target);
            if (elapsed >= 1) {
                if (_onComplete) _onComplete();
                return false;
            }
            return true;
        };
    },
    update: function(time) {
        this._tweens = this._tweens.filter(tw => tw.update(time));
    },
    Easing: { 
        Cubic: { 
            Out: (k) => 1 - Math.pow(1 - k, 3),
            InOut: (k) => (k < 0.5) ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2
        },
        Quadratic: {
            Out: (k) => 1 - (1 - k) * (1 - k),
            InOut: (k) => (k < 0.5) ? 2 * k * k : -1 + (4 - 2 * k) * k
        }
    }
};

// ---------------------------------------------------------
// 4. MAPEO DE COMPONENTES, VISTA FLOTANTE Y ENFOQUES DE CÁMARA
// ---------------------------------------------------------
const simulatorSteps = [
    {
        id: "cpu",
        name: "CPU (Procesador)",
        nodeNames: ["CPU_17"],
        floatingOffset: new THREE.Vector3(0, 0.15, 0.95), // Flota frente al socket AM4
        // Enfoque cinemático milimétrico al socket AM4
        cameraPosition: new THREE.Vector3(-0.32, 1.18, 0.45),
        cameraTarget: new THREE.Vector3(-0.46, 1.02, -0.28),
        nodes: [],
        ghostGroup: null
    },
    {
        id: "ram",
        name: "Memoria RAM",
        nodeNames: ["ram_41", "ram.001_42"],
        floatingOffset: new THREE.Vector3(0, 0.55, 0.65), // Flota arriba de las ranuras DIMM
        // Enfoque cinemático cenital/lateral a las ranuras DIMM
        cameraPosition: new THREE.Vector3(-0.06, 1.28, 0.52),
        cameraTarget: new THREE.Vector3(-0.17, 1.02, -0.25),
        nodes: [],
        ghostGroup: null
    },
    {
        id: "cooler",
        name: "Disipador / Cooler",
        nodeNames: [
            "coolerRad_16", "cpuHeadCooler_18", "cuperTubes_29", 
            "fan2_32", "Holder_low_33", "Cylinder_30", "Cylinder.001_31"
        ],
        floatingOffset: new THREE.Vector3(0, 0.15, 1.35), // Flota frente al CPU
        // Enfoque cinemático al sistema de disipación
        cameraPosition: new THREE.Vector3(-0.25, 1.25, 0.95),
        cameraTarget: new THREE.Vector3(-0.46, 1.02, -0.15),
        nodes: [],
        ghostGroup: null
    },
    {
        id: "gpu",
        name: "Tarjeta Gráfica (GPU)",
        nodeNames: ["Empty_12"],
        floatingOffset: new THREE.Vector3(0, -0.20, 1.35), // Flota horizontal frente al PCIe
        // Enfoque cinemático directo al slot PCIe x16
        cameraPosition: new THREE.Vector3(-0.28, 0.78, 1.05),
        cameraTarget: new THREE.Vector3(-0.52, 0.61, -0.10),
        nodes: [],
        ghostGroup: null
    },
    {
        id: "psu",
        name: "Fuente de Poder (PSU)",
        nodeNames: ["powerSupply_0"],
        floatingOffset: new THREE.Vector3(-0.85, 0, 0.85), // Flota fuera de la bahía superior
        // Enfoque cinemático a la bahía de alimentación superior
        cameraPosition: new THREE.Vector3(-0.40, 1.75, 1.15),
        cameraTarget: new THREE.Vector3(-0.67, 1.61, 0.0),
        nodes: [],
        ghostGroup: null
    },
    {
        id: "storage",
        name: "Almacenamiento (SSD)",
        nodeNames: ["ssd_3", "ssd.001_4"],
        floatingOffset: new THREE.Vector3(0.35, 0.12, 0.45), // Flota limpio frente a las bahías frontales
        // Enfoque cinemático directo al interior de las bahías sin obstrucción del chasis
        cameraPosition: new THREE.Vector3(0.28, 0.46, 0.62),
        cameraTarget: new THREE.Vector3(0.58, 0.35, 0.02),
        nodes: [],
        ghostGroup: null
    }
];

// Nombres de piezas que deben permanecer fijas y visibles siempre (Chasis y Placa Madre)
const baseFixedNodeNames = [
    "baseMB_13", "IOdevices_34", "northbridge_39", "socket_43", 
    "Bolt_14", "box_15", "Cube_19", "Cube.001_20", "Cube.002_21", 
    "Cube.003_22", "Cube.004_23", "Cube.005_24", "Cube.006_25", 
    "Cube.007_26", "Cube.008_27", "Cube.012_28", "Plane_40", 
    "Mesh_36.002_35", "Mesh_4_36", "Mesh_6_37", "Mesh_7_38",
    "case_bottom_45", "case_top_46", "casr_frontpanel_47", "case_sideR_48", 
    "case_back_49", "case_pciSlots_50", "fan_grid_51", "case_standsDrive_52", 
    "case_driveSlots_53", "case_driveSlots2_54", "stands_2", "fan1_1"
];

// Agrupación de cables identificados en allparts.glb (Fuente y Almacenamiento/SATA)
const cableGroups = {
    psu: [
        "Cube.011_55", "Cube.013_56", "Cube.014_57", "Cube.015_58", 
        "Cube.016_59", "Cube.017_60", "Cube.018_61", "Cube.019_62",
        "Cube.022_65", "Cube.023_66", "Cube.024_67", "Cube.025_68"
    ],
    storage: [
        "Cube.020_63", "Cube.021_64"
    ]
};

const cableNodes = {
    psu: [],
    storage: []
};

function updateCablesVisibility() {
    // Cables de la Fuente de Poder (PSU): se muestran una vez montada la Fuente de Poder
    const isPsuInstalled = (componentsData.psu && componentsData.psu.status === "installed");
    cableNodes.psu.forEach(node => {
        node.visible = isPsuInstalled;
        node.traverse(c => { c.visible = isPsuInstalled; });
    });

    // Cables SATA / Datos y Corriente de Almacenamiento: se muestran una vez montado el Disco/SSD
    const isStorageInstalled = (componentsData.storage && componentsData.storage.status === "installed");
    cableNodes.storage.forEach(node => {
        node.visible = isStorageInstalled;
        node.traverse(c => { c.visible = isStorageInstalled; });
    });
}

let allpartsScene = null;
let currentStepIndex = 0;
let isAnimating = false;

// ---------------------------------------------------------
// 5. CARGA DEL MODELO Y CREACIÓN DE SILUETAS GUÍA (GHOST)
// ---------------------------------------------------------
const gltfLoader = new THREE.GLTFLoader();

function createGhostSilhouette(nodes) {
    const ghostGroup = new THREE.Group();
    ghostGroup.name = "ghost_group";

    // Material holográfico verde semitransparente con wireframe
    const ghostMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ff88,
        emissive: 0x00ff88,
        emissiveIntensity: 0.5,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        roughness: 0.2
    });

    nodes.forEach(node => {
        const clone = node.clone(true);
        clone.position.copy(node.userData.targetPosition);
        clone.rotation.copy(node.userData.targetRotation);
        clone.scale.copy(node.scale);

        clone.traverse(child => {
            if (child.isMesh) {
                child.material = ghostMaterial;
                child.castShadow = false;
                child.receiveShadow = false;
            }
        });
        ghostGroup.add(clone);
    });

    ghostGroup.visible = false;
    return ghostGroup;
}

function loadUnifiedModel() {
    const modelUrl = 'https://huggingface.co/datasets/Kpvs123/byteforge-models/resolve/main/allparts.glb';

    const onLoaded = (gltf) => {
        allpartsScene = gltf.scene;
        pcGroup.add(allpartsScene);
        window.debugModels.allpartsScene = allpartsScene;

        console.log("%c=== Nodos y Mallas encontrados en allparts.glb ===", "color: #00e5ff; font-weight: bold; font-size: 14px;");

        const nodeDict = {};
        cableNodes.psu = [];
        cableNodes.storage = [];

        allpartsScene.traverse((child) => {
            nodeDict[child.name] = child;
            console.log(`Nodo: "${child.name}" [Tipo: ${child.type}]`, child.isMesh ? `(Malla)` : "");

            // Identificar cables de la fuente y de almacenamiento/SATA
            const matName = (child.material && child.material.name) ? child.material.name : "";
            if (cableGroups.storage.includes(child.name) || matName === "red_wire") {
                if (!cableNodes.storage.includes(child)) cableNodes.storage.push(child);
            } else if (cableGroups.psu.includes(child.name) || matName === "wire") {
                if (!cableNodes.psu.includes(child)) cableNodes.psu.push(child);
            }

            if (child.isMesh && child.material) {
                child.material.side = THREE.DoubleSide;
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        console.log("%c=== Fin de Nodos de allparts.glb ===", "color: #00e5ff; font-weight: bold;");

        // 1. Limpieza de Pantalla: Registrar y Ocultar inicialmente piezas ensamblables
        simulatorSteps.forEach(step => {
            step.nodes = [];
            step.nodeNames.forEach(name => {
                const node = nodeDict[name];
                if (node) {
                    step.nodes.push(node);

                    // Guardar posiciones objetivo originales
                    node.userData.targetPosition = node.position.clone();
                    node.userData.targetRotation = node.rotation.clone();
                    node.userData.floatingPosition = node.position.clone().add(step.floatingOffset);
                    node.userData.componentId = step.id;

                    // Colocar en posición flotante
                    node.position.copy(node.userData.floatingPosition);

                    // OCULTAR AL INICIO (visible = false)
                    node.visible = false;

                    node.traverse(c => {
                        c.userData.componentId = step.id;
                        c.visible = false;
                    });
                } else {
                    console.warn(`[allparts.glb] Nodo no encontrado: ${name}`);
                }
            });

            // 2b. Crear modelo guía verde (Ghost/Wireframe) en la ranura objetivo exacta
            step.ghostGroup = createGhostSilhouette(step.nodes);
            if (step.nodes.length > 0 && step.nodes[0].parent) {
                step.nodes[0].parent.add(step.ghostGroup);
            } else {
                pcGroup.add(step.ghostGroup);
            }
        });

        // 2. Ocultar todos los cables al inicio (visible = false)
        cableNodes.psu.forEach(node => {
            node.visible = false;
            node.traverse(c => { c.visible = false; });
        });
        cableNodes.storage.forEach(node => {
            node.visible = false;
            node.traverse(c => { c.visible = false; });
        });

        // 3. Asegurar que la Placa Madre y el Chasis permanezcan siempre visibles
        baseFixedNodeNames.forEach(name => {
            const node = nodeDict[name];
            if (node) {
                node.visible = true;
                node.traverse(c => {
                    const mName = (c.material && c.material.name) ? c.material.name : "";
                    if (!cableGroups.psu.includes(c.name) && 
                        !cableGroups.storage.includes(c.name) && 
                        mName !== "red_wire" && 
                        mName !== "wire") {
                        c.visible = true;
                    }
                });
            }
        });

        // Aplicar estado inicial de cables según componentes instalados
        updateCablesVisibility();

        // Iniciar en el Paso 1 (CPU)
        activateStep(0, false);

    };

    gltfLoader.load(modelUrl, onLoaded, undefined, (err) => {
        console.warn("Intentando ruta alternativa models/allparts/allparts.glb...");
        gltfLoader.load('models/allparts/allparts.glb', onLoaded, undefined, (err2) => {
            console.error("Error cargando allparts.glb en ambas rutas:", err2);
        });
    });
}

// ---------------------------------------------------------
// 6. GESTOR DE PASOS Y TRANSICIONES CINEMÁTICAS DE CÁMARA
// ---------------------------------------------------------
let activeCamTween = null;
let activeLookTween = null;

function transitionCamera(targetCamPos, targetLookAt, duration = 1250, onComplete = null) {
    // 1. Pausar auto-rotación durante el vuelo de la cámara para trayectoria cinemática limpia
    controls.autoRotate = false;

    if (activeCamTween) activeCamTween.stop();
    if (activeLookTween) activeLookTween.stop();

    const camStart = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
    const lookStart = { x: controls.target.x, y: controls.target.y, z: controls.target.z };

    const easingFunc = (tweenManager.Easing && tweenManager.Easing.Cubic && tweenManager.Easing.Cubic.InOut) 
        ? tweenManager.Easing.Cubic.InOut 
        : tweenManager.Easing.Cubic.Out;

    activeCamTween = new tweenManager.Tween(camStart)
        .to({ x: targetCamPos.x, y: targetCamPos.y, z: targetCamPos.z }, duration)
        .easing(easingFunc)
        .onUpdate(() => {
            camera.position.set(camStart.x, camStart.y, camStart.z);
        })
        .onComplete(() => {
            // Mantener auto-rotación desactivada para dar control manual total al usuario
            controls.autoRotate = false;
            if (onComplete) onComplete();
        })
        .start();

    activeLookTween = new tweenManager.Tween(lookStart)
        .to({ x: targetLookAt.x, y: targetLookAt.y, z: targetLookAt.z }, duration)
        .easing(easingFunc)
        .onUpdate(() => {
            controls.target.set(lookStart.x, lookStart.y, lookStart.z);
        })
        .start();
}

function activateStep(stepIndex, animateCamera = true) {
    if (stepIndex < 0 || stepIndex >= simulatorSteps.length) return;
    currentStepIndex = stepIndex;

    const currentStep = simulatorSteps[currentStepIndex];

    // Actualizar visibilidad de todas las piezas del simulador
    simulatorSteps.forEach((step, idx) => {
        const isInstalled = componentsData[step.id].status === "installed";
        const isCurrent = (idx === currentStepIndex);

        if (isInstalled) {
            // Ya instalada: visible en posición objetivo fija
            step.nodes.forEach(node => {
                node.visible = true;
                node.position.copy(node.userData.targetPosition);
                node.traverse(c => c.visible = true);
            });
            if (step.ghostGroup) step.ghostGroup.visible = false;
        } else if (isCurrent) {
            // Paso actual: mostrar flotando para encajar + mostrar silueta guía verde en la ranura
            step.nodes.forEach(node => {
                node.visible = true;
                node.position.copy(node.userData.floatingPosition);
                node.traverse(c => c.visible = true);
            });
            if (step.ghostGroup) step.ghostGroup.visible = true;
        } else {
            // Pasos futuros no instalados: completamente ocultos
            step.nodes.forEach(node => {
                node.visible = false;
                node.traverse(c => c.visible = false);
            });
            if (step.ghostGroup) step.ghostGroup.visible = false;
        }
    });

    // Actualizar cables conectados/visibles según componentes montados
    updateCablesVisibility();

    // 3. Transición Cinemática de Cámara al área de trabajo
    if (animateCamera) {
        transitionCamera(currentStep.cameraPosition, currentStep.cameraTarget, 1100);
    } else {
        camera.position.copy(currentStep.cameraPosition);
        controls.target.copy(currentStep.cameraTarget);
    }

    // Actualizar Interfaz UI
    UI.updateStepDisplay(currentStepIndex);
}

// ---------------------------------------------------------
// 7. ANIMACIÓN DE ENCAJE PASO A PASO
// ---------------------------------------------------------
function fitActiveComponent() {
    if (isAnimating) return;
    const currentStep = simulatorSteps[currentStepIndex];
    if (!currentStep) return;

    if (componentsData[currentStep.id].status === "installed") return;

    isAnimating = true;
    const installBtn = document.getElementById("install-btn");
    if (installBtn) {
        installBtn.disabled = true;
        installBtn.innerText = "Encajando...";
    }

    let finishedCount = 0;
    const totalNodes = currentStep.nodes.length;

    // Deslizar suavemente desde la posición flotante hasta la silueta objetivo
    currentStep.nodes.forEach(node => {
        const target = node.userData.targetPosition;
        new tweenManager.Tween(node.position)
            .to({ x: target.x, y: target.y, z: target.z }, 1200)
            .easing(tweenManager.Easing.Cubic.Out)
            .onComplete(() => {
                finishedCount++;
                if (finishedCount === totalNodes) {
                    isAnimating = false;

                    // Ocultar silueta verde guía al completar el encaje
                    if (currentStep.ghostGroup) {
                        currentStep.ghostGroup.visible = false;
                    }

                    // Manejar éxito en la interfaz
                    UI.handleSuccess(currentStep.id);

                    // Conectar y mostrar cables si corresponde (PSU o Almacenamiento/SATA)
                    updateCablesVisibility();
                }
            })
            .start();
    });
}

// ---------------------------------------------------------
// 7.5. MODAL DE INSPECCIÓN FLOTANTE & VISOR 3D SECUNDARIO
// ---------------------------------------------------------
let modalViewerRenderer = null;
let modalViewerScene = null;
let modalViewerCamera = null;
let modalViewerControls = null;
let modalViewerAnimId = null;

function disposeComponent3DViewer() {
    // 1. Cancelar bucle de animación
    if (modalViewerAnimId) {
        cancelAnimationFrame(modalViewerAnimId);
        modalViewerAnimId = null;
    }

    // 2. Liberar controles
    if (modalViewerControls) {
        modalViewerControls.dispose();
        modalViewerControls = null;
    }

    // 3. Remover canvas del contenedor y liberar WebGLRenderer
    if (modalViewerRenderer) {
        if (modalViewerRenderer.domElement && modalViewerRenderer.domElement.parentNode) {
            modalViewerRenderer.domElement.parentNode.removeChild(modalViewerRenderer.domElement);
        }
        modalViewerRenderer.dispose();
        modalViewerRenderer = null;
    }

    // 4. Limpiar objetos de la mini-escena
    if (modalViewerScene) {
        while (modalViewerScene.children.length > 0) {
            const obj = modalViewerScene.children[0];
            modalViewerScene.remove(obj);
        }
        modalViewerScene = null;
    }

    modalViewerCamera = null;
}

function initComponent3DViewer(stepId) {
    // Limpiar cualquier instancia previa antes de crear una nueva
    disposeComponent3DViewer();

    const container = document.getElementById("component-viewer-3d");
    if (!container) return;

    // Dimensiones del contenedor (con fallback si aún se calcula el layout)
    const width = container.clientWidth || 310;
    const height = container.clientHeight || 350;

    // Crear sub-escena aislada
    modalViewerScene = new THREE.Scene();

    // Cámara con FOV natural para visualización de producto
    modalViewerCamera = new THREE.PerspectiveCamera(40, width / height, 0.05, 50);

    // Mini renderizador WebGL
    modalViewerRenderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance" 
    });
    modalViewerRenderer.setSize(width, height);
    modalViewerRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    modalViewerRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    modalViewerRenderer.toneMappingExposure = 1.15;

    // Insertar canvas antes del overlay de texto para que los hints queden visibles encima
    container.insertBefore(modalViewerRenderer.domElement, container.firstChild);

    // Controles de órbita independientes
    modalViewerControls = new THREE.OrbitControls(modalViewerCamera, modalViewerRenderer.domElement);
    modalViewerControls.enableDamping = true;
    modalViewerControls.dampingFactor = 0.06;
    modalViewerControls.autoRotate = true;
    modalViewerControls.autoRotateSpeed = 1.8;
    modalViewerControls.enablePan = false;

    // Iluminación de estudio para destacar la pieza sobre fondo oscuro
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    modalViewerScene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(2.5, 3.5, 3);
    modalViewerScene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x00e5ff, 0.85);
    fillLight.position.set(-3, 0.5, 2);
    modalViewerScene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.0);
    rimLight.position.set(0, 3, -3);
    modalViewerScene.add(rimLight);

    // Clonar mallas del componente del paso actual
    const step = simulatorSteps.find(s => s.id === stepId);
    if (!step || !step.nodes || step.nodes.length === 0) return;

    const previewGroup = new THREE.Group();

    step.nodes.forEach(node => {
        const clone = node.clone(true);
        if (node.userData.targetPosition) clone.position.copy(node.userData.targetPosition);
        if (node.userData.targetRotation) clone.rotation.copy(node.userData.targetRotation);
        clone.scale.copy(node.scale);

        // Asegurar visibilidad de todas las mallas hijas del clon
        clone.visible = true;
        clone.traverse(child => {
            child.visible = true;
            if (child.isMesh && child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => { m.side = THREE.DoubleSide; });
                } else {
                    child.material.side = THREE.DoubleSide;
                }
            }
        });

        previewGroup.add(clone);
    });

    // Centrar el objeto clonado exactamente en el origen (0, 0, 0)
    const box = new THREE.Box3().setFromObject(previewGroup);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    previewGroup.position.sub(center);
    modalViewerScene.add(previewGroup);

    // Encuadre dinámico de la cámara según el tamaño del componente
    const maxDim = Math.max(size.x, size.y, size.z, 0.1);
    const fov = modalViewerCamera.fov * (Math.PI / 180);
    let cameraDistance = maxDim / (2 * Math.tan(fov / 2));
    cameraDistance = Math.max(cameraDistance * 1.55, 0.45);

    modalViewerCamera.position.set(cameraDistance * 0.75, cameraDistance * 0.45, cameraDistance);
    modalViewerCamera.lookAt(0, 0, 0);

    modalViewerControls.target.set(0, 0, 0);
    modalViewerControls.minDistance = cameraDistance * 0.35;
    modalViewerControls.maxDistance = cameraDistance * 3.5;
    modalViewerControls.update();

    // Bucle de animación independiente para el visor modal
    function animateModalViewer() {
        modalViewerAnimId = requestAnimationFrame(animateModalViewer);
        if (modalViewerControls) modalViewerControls.update();
        if (modalViewerRenderer && modalViewerScene && modalViewerCamera) {
            modalViewerRenderer.render(modalViewerScene, modalViewerCamera);
        }
    }
    animateModalViewer();
}

function openInspectModal(stepId) {
    const data = componentsData[stepId];
    if (!data) return;

    const modalCategory = document.getElementById("modal-category");
    const modalTitle = document.getElementById("modal-title");
    const modalIcon = document.getElementById("modal-visual-icon");
    const modalHighlight = document.getElementById("modal-highlight");
    const modalShortDesc = document.getElementById("modal-short-desc");
    const modalPrice = document.getElementById("modal-price");
    const modalTdp = document.getElementById("modal-tdp");
    const modalCompat = document.getElementById("modal-compat");
    const modalFullDesc = document.getElementById("modal-full-desc");

    if (modalCategory) modalCategory.innerText = data.category || "Hardware";
    if (modalTitle) modalTitle.innerText = data.modalTitle || data.name;
    if (modalIcon) modalIcon.innerText = data.icon || "⚙️";
    if (modalHighlight) modalHighlight.innerText = data.highlight || "Componente Oficial";
    if (modalShortDesc) modalShortDesc.innerText = data.shortDesc || data.desc;
    if (modalPrice) modalPrice.innerText = data.price || "N/A";
    if (modalTdp) modalTdp.innerText = data.tdp || "N/A";
    if (modalCompat) modalCompat.innerText = data.compatibility || "Universal";
    if (modalFullDesc) modalFullDesc.innerText = data.fullDesc || data.eduTip;

    // Actualizar botón de instalación dentro del modal según estado
    const modalFitBtn = document.getElementById("modal-fit-btn");
    if (modalFitBtn) {
        if (data.status === "installed") {
            modalFitBtn.innerText = "✔ Ya Instalado";
            modalFitBtn.disabled = true;
            modalFitBtn.style.opacity = "0.6";
        } else {
            modalFitBtn.innerText = `⚡ Instalar / Encajar ${data.name.split(" ")[0]}`;
            modalFitBtn.disabled = false;
            modalFitBtn.style.opacity = "1";
        }
    }

    const modal = document.getElementById("inspect-modal");
    if (modal) modal.classList.remove("hidden");

    // Inicializar el visor 3D en el siguiente cuadro para garantizar que las dimensiones estén calculadas
    requestAnimationFrame(() => {
        initComponent3DViewer(stepId);
    });
}

function closeInspectModal() {
    disposeComponent3DViewer();
    const modal = document.getElementById("inspect-modal");
    if (modal) modal.classList.add("hidden");
}

// ---------------------------------------------------------
// 7.6. MODAL CONÓCENOS & INFORMACIÓN DEL PROYECTO DE GRADO
// ---------------------------------------------------------
function openAboutModal() {
    const modal = document.getElementById("about-project-modal");
    if (modal) modal.classList.remove("hidden");
}

function closeAboutModal() {
    const modal = document.getElementById("about-project-modal");
    if (modal) modal.classList.add("hidden");
}

// ---------------------------------------------------------
// 7.6.1. MODAL DE FINALIZACIÓN DE ENSAMBLE (SPECS DOCK 100%)
// ---------------------------------------------------------
function openCompletionModal() {
    const modal = document.getElementById("assembly-completion-modal");
    if (!modal) return;

    // Calcular totales finales y resumen del equipo
    const summary = updateBuildSummary();

    const priceEl = document.getElementById("completion-total-price");
    const tdpEl = document.getElementById("completion-total-tdp");
    if (priceEl) priceEl.innerText = `$${Math.round(summary.totalPrice)} USD`;
    if (tdpEl) tdpEl.innerText = `${Math.round(summary.totalTdp)}W (TDP)`;

    // Renderizar las tarjetas con los 7 componentes instalados
    const grid = document.getElementById("completion-specs-grid");
    if (grid && preAssemblyDatabase) {
        grid.innerHTML = "";

        const categoryConfigs = {
            motherboard: { label: "Placa Madre", icon: "🔲", code: "MOTHERBOARD" },
            cpu: { label: "Procesador", icon: "⚡", code: "CPU" },
            ram: { label: "Memoria RAM", icon: "🚀", code: "RAM" },
            cooler: { label: "Disipador / Cooler", icon: "❄️", code: "COOLER" },
            gpu: { label: "Tarjeta Gráfica", icon: "🎴", code: "GPU" },
            storage: { label: "Almacenamiento (SSD)", icon: "💾", code: "STORAGE" },
            psu: { label: "Fuente de Poder (PSU)", icon: "🔌", code: "PSU" }
        };

        categoriesOrder.forEach(catKey => {
            const cfg = categoryConfigs[catKey] || { label: catKey, icon: "⚙️", code: catKey.toUpperCase() };
            const selectedId = currentPreAssemblySelection ? currentPreAssemblySelection[catKey] : null;
            const cat = preAssemblyDatabase[catKey];
            const item = cat && cat.items ? cat.items.find(i => i.id === selectedId) : null;

            const name = item ? item.name : (componentsData[catKey] ? componentsData[catKey].name : "Componente Estándar");
            const spec = item ? (item.spec || "") : "";
            const price = item ? `$${item.price || 0} USD` : "$0 USD";
            const tdp = item ? (item.tdp > 0 ? `${item.tdp}W TDP` : (item.wattage ? `${item.wattage}W Potencia` : "Bajo Consumo")) : "OK";

            const card = document.createElement("div");
            card.className = "completion-spec-card";
            card.innerHTML = `
                <div class="completion-card-icon">${cfg.icon}</div>
                <div class="completion-card-details">
                    <span class="completion-card-cat">${cfg.code} // ${cfg.label}</span>
                    <span class="completion-card-name" title="${name}">${name}</span>
                    ${spec ? `<span class="completion-card-spec">${spec}</span>` : ""}
                    <div class="completion-card-footer">
                        <span class="completion-card-price">${price}</span>
                        <span class="completion-card-tdp">${tdp}</span>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    modal.classList.remove("hidden");
}

function closeCompletionModal() {
    const modal = document.getElementById("assembly-completion-modal");
    if (modal) modal.classList.add("hidden");
}

function resetSimulation() {
    closeCompletionModal();

    // 1. Reiniciar estado de componentes a pendiente
    simulatorSteps.forEach(step => {
        if (componentsData[step.id]) {
            componentsData[step.id].status = "pending";
        }
    });

    // 2. Reiniciar barra e indicadores de progreso
    const progressText = document.getElementById("progress-text");
    const progressFill = document.getElementById("progress-fill");
    if (progressText) progressText.innerText = `0/${simulatorSteps.length}`;
    if (progressFill) progressFill.style.width = `0%`;

    // 3. Volver al Paso 0 y reposicionar piezas
    activateStep(0, true);

    // 4. Notificación visual al usuario
    const toast = document.getElementById("success-toast");
    if (toast) {
        toast.innerText = "Simulación reiniciada. ¡Comienza el ensamble desde el Paso 1! ⚡";
        toast.classList.remove("hidden");
        setTimeout(() => toast.classList.add("hidden"), 3000);
    }
}

// ---------------------------------------------------------
// 7.7. CONFIGURADOR PRE-ENSAMBLAJE (SELECCIÓN DE COMPONENTES)
// CARGA ASÍNCRONA DE DATOS Y MOTOR DE COMPATIBILIDAD (BYTEFORGE)
// ---------------------------------------------------------

// Almacén en memoria de datos brutos cargados desde 'data/'
let byteforgeDatabase = {
    cpus: [],
    gpus: [],
    motherboards: [],
    rams: [],
    psus: [],
    storage: [],
    coolers: []
};

// Base de datos de componentes mapeada para la interfaz de pre-ensamblaje
let preAssemblyDatabase = {
    motherboard: { categoryName: "Placa Madre / Motherboard", icon: "🎛️", items: [] },
    cpu: { categoryName: "Procesador (CPU)", icon: "⚡", items: [] },
    ram: { categoryName: "Memoria RAM", icon: "🚀", items: [] },
    cooler: { categoryName: "Disipador / Cooler", icon: "❄️", items: [] },
    gpu: { categoryName: "Tarjeta Gráfica (GPU)", icon: "🎮", items: [] },
    storage: { categoryName: "Almacenamiento (SSD)", icon: "💾", items: [] },
    psu: { categoryName: "Fuente de Poder (PSU)", icon: "🔌", items: [] }
};

// Selección activa actual en memoria (Placa Madre como base inicial)
let currentPreAssemblySelection = {
    motherboard: "mb-asus-b650-a",
    cpu: "cpu-amd-7800x3d",
    ram: "ram-corsair-ddr5-32gb-6000",
    cooler: "cooler-thermalright-pa120se",
    gpu: "gpu-rtx-4070-super",
    storage: "storage-samsung-990pro-2tb",
    psu: "psu-corsair-rm750e"
};

// Orden canónico de las 7 categorías en la UI (Placa Madre visible de primera como núcleo de compatibilidad)
const categoriesOrder = ["motherboard", "cpu", "ram", "cooler", "gpu", "storage", "psu"];

/**
 * 1. Carga Asíncrona de Datos:
 * Realiza fetch a los 7 archivos JSON en 'data/' y almacena la información en memoria.
 */
async function loadComponentsData() {
    console.log("⚡ ByteForge: Cargando base de datos desde 'data/'...");
    const files = [
        { key: "cpus", file: "data/cpus.json" },
        { key: "gpus", file: "data/gpus.json" },
        { key: "motherboards", file: "data/motherboards.json" },
        { key: "rams", file: "data/rams.json" },
        { key: "psus", file: "data/psus.json" },
        { key: "storage", file: "data/storage.json" },
        { key: "coolers", file: "data/coolers.json" }
    ];

    try {
        const fetchPromises = files.map(async ({ key, file }) => {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status} al cargar ${file}`);
            }
            const data = await response.json();
            return { key, data };
        });

        const results = await Promise.all(fetchPromises);
        results.forEach(({ key, data }) => {
            byteforgeDatabase[key] = data;
        });

        console.log("✓ Base de datos ByteForge cargada exitosamente vía fetch:", byteforgeDatabase);
    } catch (err) {
        console.warn("Aviso: No se pudo cargar vía fetch directo (posible apertura local file:// sin servidor). Usando réplica en memoria:", err);
        byteforgeDatabase = {
            cpus: [
                { id: "cpu-amd-7800x3d", name: "AMD Ryzen 7 7800X3D", brand: "AMD", socket: "AM5", cores: 8, threads: 16, boostClockGHz: 5.0, tdpWatts: 120, ramType: "DDR5", priceUSD: 399.0 },
                { id: "cpu-intel-14700k", name: "Intel Core i7-14700K", brand: "Intel", socket: "LGA1700", cores: 20, threads: 28, boostClockGHz: 5.6, tdpWatts: 125, ramType: "DDR5", priceUSD: 389.0 },
                { id: "cpu-amd-5600x", name: "AMD Ryzen 5 5600X", brand: "AMD", socket: "AM4", cores: 6, threads: 12, boostClockGHz: 4.6, tdpWatts: 65, ramType: "DDR4", priceUSD: 145.0 },
                { id: "cpu-intel-12400f", name: "Intel Core i5-12400F", brand: "Intel", socket: "LGA1700", cores: 6, threads: 12, boostClockGHz: 4.4, tdpWatts: 65, ramType: "DDR4", priceUSD: 135.0 }
            ],
            motherboards: [
                { id: "mb-asus-b650-a", name: "ASUS ROG STRIX B650-A GAMING WIFI", brand: "ASUS", socket: "AM5", chipset: "B650", formFactor: "ATX", ramType: "DDR5", tdpWatts: 50, priceUSD: 219.0 },
                { id: "mb-msi-b760-tomahawk", name: "MSI MAG B760 TOMAHAWK WIFI", brand: "MSI", socket: "LGA1700", chipset: "B760", formFactor: "ATX", ramType: "DDR5", tdpWatts: 50, priceUSD: 189.0 },
                { id: "mb-msi-b550-tomahawk", name: "MSI MAG B550 TOMAHAWK", brand: "MSI", socket: "AM4", chipset: "B550", formFactor: "ATX", ramType: "DDR4", tdpWatts: 45, priceUSD: 149.0 },
                { id: "mb-asus-b760-d4", name: "ASUS PRIME B760-PLUS D4", brand: "ASUS", socket: "LGA1700", chipset: "B760", formFactor: "ATX", ramType: "DDR4", tdpWatts: 45, priceUSD: 159.0 }
            ],
            rams: [
                { id: "ram-corsair-ddr5-32gb-6000", name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5-6000", brand: "Corsair", capacityGB: 32, modules: "2x16GB", ramType: "DDR5", speedMHz: 6000, tdpWatts: 10, priceUSD: 119.0 },
                { id: "ram-gskill-ddr5-32gb-6000", name: "G.Skill Flare X5 Series 32GB (2x16GB) DDR5-6000", brand: "G.Skill", capacityGB: 32, modules: "2x16GB", ramType: "DDR5", speedMHz: 6000, tdpWatts: 10, priceUSD: 99.0 },
                { id: "ram-corsair-ddr4-16gb-3200", name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200", brand: "Corsair", capacityGB: 16, modules: "2x8GB", ramType: "DDR4", speedMHz: 3200, tdpWatts: 7, priceUSD: 45.0 },
                { id: "ram-kingston-ddr4-32gb-3600", name: "Kingston Fury Beast 32GB (2x16GB) DDR4-3600", brand: "Kingston", capacityGB: 32, modules: "2x16GB", ramType: "DDR4", speedMHz: 3600, tdpWatts: 8, priceUSD: 79.0 }
            ],
            gpus: [
                { id: "gpu-rtx-4070-super", name: "NVIDIA GeForce RTX 4070 Super", brand: "NVIDIA", vramGB: 12, vramType: "GDDR6X", tdpWatts: 220, recommendedPsuWatts: 650, priceUSD: 599.0 },
                { id: "gpu-rx-7800-xt", name: "AMD Radeon RX 7800 XT", brand: "AMD", vramGB: 16, vramType: "GDDR6", tdpWatts: 263, recommendedPsuWatts: 700, priceUSD: 499.0 },
                { id: "gpu-rtx-4060", name: "NVIDIA GeForce RTX 4060", brand: "NVIDIA", vramGB: 8, vramType: "GDDR6", tdpWatts: 115, recommendedPsuWatts: 550, priceUSD: 299.0 },
                { id: "gpu-rtx-4080-super", name: "NVIDIA GeForce RTX 4080 Super", brand: "NVIDIA", vramGB: 16, vramType: "GDDR6X", tdpWatts: 320, recommendedPsuWatts: 750, priceUSD: 999.0 }
            ],
            coolers: [
                { id: "cooler-thermalright-pa120se", name: "Thermalright Peerless Assassin 120 SE", brand: "Thermalright", type: "Air Cooler", supportedSockets: ["AM4", "AM5", "LGA1700", "LGA1200"], tdpRatingWatts: 265, tdpWatts: 5, priceUSD: 34.9 },
                { id: "cooler-nzxt-kraken-360", name: "NZXT Kraken 360", brand: "NZXT", type: "AIO Liquid Cooler", supportedSockets: ["AM4", "AM5", "LGA1700", "LGA1200"], tdpRatingWatts: 300, tdpWatts: 15, priceUSD: 179.99 },
                { id: "cooler-amd-wraith-stealth", name: "AMD Wraith Stealth", brand: "AMD", type: "Air Cooler", supportedSockets: ["AM4", "AM5"], tdpRatingWatts: 65, tdpWatts: 4, priceUSD: 15.0 }
            ],
            storage: [
                { id: "storage-samsung-990pro-2tb", name: "Samsung 990 Pro 2TB NVMe", brand: "Samsung", type: "NVMe M.2 SSD", capacityGB: 2000, interface: "PCIe 4.0 x4", tdpWatts: 8, priceUSD: 169.0 },
                { id: "storage-crucial-p3plus-1tb", name: "Crucial P3 Plus 1TB NVMe", brand: "Crucial", type: "NVMe M.2 SSD", capacityGB: 1000, interface: "PCIe 4.0 x4", tdpWatts: 5, priceUSD: 68.0 },
                { id: "storage-kingston-nv2-1tb", name: "Kingston NV2 1TB NVMe", brand: "Kingston", type: "NVMe M.2 SSD", capacityGB: 1000, interface: "PCIe 4.0 x4", tdpWatts: 4, priceUSD: 58.0 }
            ],
            psus: [
                { id: "psu-corsair-rm750e", name: "Corsair RM750e (2023) 750W", brand: "Corsair", wattage: 750, efficiencyRating: "80 Plus Gold", priceUSD: 99.0 },
                { id: "psu-seasonic-focus-gx850", name: "Seasonic FOCUS GX-850 850W", brand: "Seasonic", wattage: 850, efficiencyRating: "80 Plus Gold", priceUSD: 139.0 },
                { id: "psu-evga-500-ba", name: "EVGA 500 BA 500W", brand: "EVGA", wattage: 500, efficiencyRating: "80 Plus Bronze", priceUSD: 49.0 },
                { id: "psu-msi-mag-a650bn", name: "MSI MAG A650BN 650W", brand: "MSI", wattage: 650, efficiencyRating: "80 Plus Bronze", priceUSD: 65.0 }
            ]
        };
    }

    mapDatabaseToPreAssembly();
    renderTechComponentRows();
    updateBuildSummary();
    applySelectionToSimulator();
}

/**
 * Normaliza y mapea la base de datos a preAssemblyDatabase con metadatos técnicos
 */
function mapDatabaseToPreAssembly() {
    // 1. CPUs
    preAssemblyDatabase.cpu.items = (byteforgeDatabase.cpus || []).map(i => ({
        id: i.id,
        name: i.name,
        brand: i.brand,
        socket: i.socket,
        ramType: i.ramType,
        spec: `${i.cores}C/${i.threads}T • Socket ${i.socket} • ${i.ramType}`,
        tdp: Number(i.tdpWatts) || 65,
        price: Number(i.priceUSD) || 0
    }));

    // 2. Motherboards
    preAssemblyDatabase.motherboard.items = (byteforgeDatabase.motherboards || []).map(i => ({
        id: i.id,
        name: i.name,
        brand: i.brand,
        socket: i.socket,
        ramType: i.ramType,
        formFactor: i.formFactor,
        spec: `Socket ${i.socket} • ${i.ramType} • ${i.chipset || i.formFactor}`,
        tdp: Number(i.tdpWatts) || 50,
        price: Number(i.priceUSD) || 0
    }));

    // 3. RAMs
    preAssemblyDatabase.ram.items = (byteforgeDatabase.rams || []).map(i => ({
        id: i.id,
        name: i.name,
        brand: i.brand,
        ramType: i.ramType,
        capacityGB: i.capacityGB,
        spec: `${i.capacityGB}GB (${i.modules || 'Kit'}) ${i.ramType}${i.speedMHz ? ' ' + i.speedMHz + 'MHz' : ''}`.trim(),
        tdp: Number(i.tdpWatts) || 10,
        price: Number(i.priceUSD) || 0
    }));

    // 4. GPUs
    preAssemblyDatabase.gpu.items = (byteforgeDatabase.gpus || []).map(i => ({
        id: i.id,
        name: i.name,
        brand: i.brand,
        vramGB: i.vramGB,
        vramType: i.vramType,
        spec: `${i.vramGB}GB ${i.vramType} • Rec. ${i.recommendedPsuWatts || 600}W`,
        tdp: Number(i.tdpWatts) || 200,
        price: Number(i.priceUSD) || 0
    }));

    // 5. Coolers
    preAssemblyDatabase.cooler.items = (byteforgeDatabase.coolers || []).map(i => ({
        id: i.id,
        name: i.name,
        brand: i.brand,
        type: i.type,
        supportedSockets: i.supportedSockets || [],
        spec: `${i.type} • Capacidad ${i.tdpRatingWatts || 200}W`,
        tdp: Number(i.tdpWatts) || 5,
        price: Number(i.priceUSD) || 0
    }));

    // 6. Storage
    preAssemblyDatabase.storage.items = (byteforgeDatabase.storage || []).map(i => ({
        id: i.id,
        name: i.name,
        brand: i.brand,
        type: i.type,
        capacityGB: i.capacityGB,
        spec: `${i.type} • ${i.capacityGB >= 1000 ? (i.capacityGB / 1000) + 'TB' : i.capacityGB + 'GB'}`,
        tdp: Number(i.tdpWatts) || 6,
        price: Number(i.priceUSD) || 0
    }));

    // 7. PSUs
    preAssemblyDatabase.psu.items = (byteforgeDatabase.psus || []).map(i => ({
        id: i.id,
        name: i.name,
        brand: i.brand,
        wattage: Number(i.wattage) || 650,
        efficiencyRating: i.efficiencyRating,
        spec: `${i.wattage}W • ${i.efficiencyRating || 'Certificada'}`,
        wattage: Number(i.wattage) || 650,
        tdp: 0,
        price: Number(i.priceUSD) || 0
    }));

    // Asegurar que las selecciones iniciales existan en la base de datos
    categoriesOrder.forEach(catKey => {
        const cat = preAssemblyDatabase[catKey];
        if (cat && cat.items && cat.items.length) {
            const currentId = currentPreAssemblySelection[catKey];
            const exists = cat.items.some(it => it.id === currentId);
            if (!exists) {
                currentPreAssemblySelection[catKey] = cat.items[0].id;
            }
        }
    });
}

/**
 * 2. SELECTOR DE COMPONENTES: BARRAS HORIZONTALES CON SELECTOR ELEGANTE Y BUSCADOR
 * Rediseño minimalista de alta legibilidad para las 7 categorías de componentes.
 */
const techCategoriesConfig = {
    motherboard: {
        catKey: "motherboard",
        label: "Placa Madre",
        icon: "🔲"
    },
    cpu: {
        catKey: "cpu",
        label: "Procesador",
        icon: "⚡"
    },
    ram: {
        catKey: "ram",
        label: "Memoria RAM",
        icon: "🚀"
    },
    cooler: {
        catKey: "cooler",
        label: "Disipador / Cooler",
        icon: "❄️"
    },
    gpu: {
        catKey: "gpu",
        label: "Tarjeta Gráfica",
        icon: "🎴"
    },
    storage: {
        catKey: "storage",
        label: "Almacenamiento (SSD)",
        icon: "💾"
    },
    psu: {
        catKey: "psu",
        label: "Fuente de Poder (PSU)",
        icon: "🔌"
    }
};

let activeTechAccordionCategory = null;
const techSearchQueries = {
    motherboard: "",
    cpu: "",
    ram: "",
    cooler: "",
    gpu: "",
    storage: "",
    psu: ""
};

/**
 * Renderiza la lista simplificada de las 7 barras horizontales apiladas
 */
function renderTechComponentRows() {
    const listContainer = document.getElementById("tech-selector-list");
    if (!listContainer) {
        console.warn("No se encontró el contenedor #tech-selector-list en el DOM.");
        return;
    }

    listContainer.innerHTML = "";

    categoriesOrder.forEach(catKey => {
        const cfg = techCategoriesConfig[catKey];
        const cat = preAssemblyDatabase ? preAssemblyDatabase[catKey] : null;
        if (!cfg || !cat || !cat.items || !cat.items.length) return;

        // Asegurar que exista un componente seleccionado válido
        let selectedId = currentPreAssemblySelection ? currentPreAssemblySelection[catKey] : null;
        let activeItem = cat.items.find(i => i.id === selectedId);
        if (!activeItem) {
            activeItem = cat.items[0];
            if (currentPreAssemblySelection) {
                currentPreAssemblySelection[catKey] = activeItem.id;
            }
        }

        const row = document.createElement("div");
        row.className = `tech-row ${activeTechAccordionCategory === catKey ? 'open' : ''}`;
        row.id = `tech-row-${catKey}`;
        row.dataset.category = catKey;

        row.innerHTML = `
            <div class="tech-row-bar" id="row-bar-${catKey}" title="Clic para elegir ${cfg.label}">
                <!-- a) Ícono grande + Nombre claro de la Categoría -->
                <div class="tech-col-category">
                    <span class="tech-cat-icon">${cfg.icon}</span>
                    <span class="tech-cat-name">${cfg.label}</span>
                </div>

                <!-- b) Un único Selector/Dropdown elegante y ancho -->
                <div class="tech-col-selector">
                    <div class="tech-selector-box">
                        <span class="tech-selected-name" id="selected-name-${catKey}">${activeItem.name}</span>
                        <span class="tech-chevron">▼</span>
                    </div>
                </div>

                <!-- c) Precio ($ USD) en texto grande, brillante y alineado a la derecha -->
                <div class="tech-col-price">
                    <span class="tech-price-val" id="row-price-${catKey}">$${activeItem.price || 0} USD</span>
                </div>
            </div>

            <!-- Menú / Modal Flotante de Opciones con Buscador Superior -->
            <div class="tech-row-dropdown ${activeTechAccordionCategory === catKey ? '' : 'hidden'}" id="tech-dropdown-${catKey}">
                <div class="tech-dropdown-header">
                    <div class="tech-search-wrap">
                        <span class="tech-search-icon">🔍</span>
                        <input type="text" 
                               class="tech-search-input" 
                               id="search-input-${catKey}"
                               placeholder="Buscar ${cfg.label.toLowerCase()}, marca, modelo..." 
                               value="${techSearchQueries[catKey] || ''}"
                               autocomplete="off"
                               spellcheck="false"
                        >
                        <button class="tech-search-clear ${techSearchQueries[catKey] ? '' : 'hidden'}" id="search-clear-${catKey}" title="Limpiar filtro">&times;</button>
                    </div>
                    <div class="tech-dropdown-header-right">
                        <span class="tech-results-count" id="results-count-${catKey}">Modelos disponibles</span>
                        <button class="tech-dropdown-close-btn" id="close-dropdown-${catKey}" title="Cerrar">&times;</button>
                    </div>
                </div>
                <div class="tech-dropdown-results" id="dropdown-results-${catKey}">
                    <!-- Opciones limpias inyectadas dinámicamente -->
                </div>
            </div>
        `;

        listContainer.appendChild(row);

        // Renderizar las opciones filtradas dentro del dropdown de la fila
        renderTechRowResults(catKey);

        // Event Listeners de la Fila
        const rowBar = row.querySelector(".tech-row-bar");
        const searchInput = row.querySelector(".tech-search-input");
        const searchClear = row.querySelector(".tech-search-clear");
        const closeBtn = row.querySelector(".tech-dropdown-close-btn");

        // Alternar el desplegable al hacer clic en la barra
        rowBar.addEventListener("click", () => {
            toggleTechRowDropdown(catKey);
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                closeTechRowDropdown(catKey);
            });
        }

        // Búsqueda en vivo al escribir en el campo de texto
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value;
            techSearchQueries[catKey] = query;

            if (query.trim().length > 0) {
                searchClear.classList.remove("hidden");
            } else {
                searchClear.classList.add("hidden");
            }

            renderTechRowResults(catKey);
        });

        // Botón limpiar búsqueda
        searchClear.addEventListener("click", (e) => {
            e.stopPropagation();
            techSearchQueries[catKey] = "";
            searchInput.value = "";
            searchClear.classList.add("hidden");
            renderTechRowResults(catKey);
            searchInput.focus();
        });
    });

    updateBuildSummary();
}

/**
 * Filtra dinámicamente los elementos de la base de datos JSON para una fila (Diseño Limpio)
 */
function renderTechRowResults(catKey) {
    const resultsContainer = document.getElementById(`dropdown-results-${catKey}`);
    const resultsCountEl = document.getElementById(`results-count-${catKey}`);
    const cat = preAssemblyDatabase ? preAssemblyDatabase[catKey] : null;
    if (!resultsContainer || !cat || !cat.items) return;

    const query = (techSearchQueries[catKey] || "").trim().toLowerCase();
    const selectedId = currentPreAssemblySelection ? currentPreAssemblySelection[catKey] : null;

    // Obtener referencias de compatibilidad actuales (Motherboard actual)
    const currentMb = preAssemblyDatabase.motherboard && preAssemblyDatabase.motherboard.items
        ? preAssemblyDatabase.motherboard.items.find(i => i.id === currentPreAssemblySelection.motherboard)
        : null;

    const filteredItems = cat.items.filter(item => {
        if (!query) return true;
        const nameMatch = (item.name || "").toLowerCase().includes(query);
        const brandMatch = (item.brand || "").toLowerCase().includes(query);
        const specMatch = (item.spec || "").toLowerCase().includes(query);
        const socketMatch = (item.socket || "").toLowerCase().includes(query);
        const chipsetMatch = (item.chipset || "").toLowerCase().includes(query);
        const ramTypeMatch = (item.ramType || "").toLowerCase().includes(query);
        const typeMatch = (item.type || "").toLowerCase().includes(query);
        return nameMatch || brandMatch || specMatch || socketMatch || chipsetMatch || ramTypeMatch || typeMatch;
    });

    if (resultsCountEl) {
        if (query) {
            resultsCountEl.innerText = `${filteredItems.length} de ${cat.items.length} modelos`;
        } else {
            resultsCountEl.innerText = `${cat.items.length} modelos disponibles`;
        }
    }

    resultsContainer.innerHTML = "";

    if (filteredItems.length === 0) {
        resultsContainer.innerHTML = `
            <div class="tech-empty-results">
                <span>⚠️ No se encontraron componentes que coincidan con "<strong>${query}</strong>"</span>
            </div>
        `;
        return;
    }

    filteredItems.forEach(item => {
        const isEquipped = (item.id === selectedId);

        // Evaluación de compatibilidad en vivo para el componente
        let compatTagHtml = "";
        if (catKey === "cpu" && currentMb && currentMb.socket && item.socket) {
            if (item.socket.trim().toUpperCase() !== currentMb.socket.trim().toUpperCase()) {
                compatTagHtml = `<span class="tech-compat-tag compat-tag-warn">⚠️ Incompatible con Placa (${item.socket} vs ${currentMb.socket})</span>`;
            }
        } else if (catKey === "ram" && currentMb && currentMb.ramType && item.ramType) {
            if (item.ramType.trim().toUpperCase() !== currentMb.ramType.trim().toUpperCase()) {
                compatTagHtml = `<span class="tech-compat-tag compat-tag-warn">⚠️ Incompatible con Placa (${item.ramType} vs ${currentMb.ramType})</span>`;
            }
        } else if (catKey === "cooler" && currentMb && currentMb.socket && item.supportedSockets) {
            const ok = item.supportedSockets.some(s => s.trim().toUpperCase() === currentMb.socket.trim().toUpperCase());
            if (!ok) {
                compatTagHtml = `<span class="tech-compat-tag compat-tag-warn">⚠️ Sin soporte para socket ${currentMb.socket}</span>`;
            }
        }

        const card = document.createElement("div");
        card.className = `tech-item-option ${isEquipped ? 'equipped' : ''}`;
        card.dataset.id = item.id;

        card.innerHTML = `
            <div class="option-left">
                <span class="option-name">${item.name}</span>
                ${compatTagHtml ? `<div class="option-compat-tag">${compatTagHtml}</div>` : ''}
            </div>
            <div class="option-right">
                <span class="option-price">$${item.price || 0} USD</span>
                <span class="option-badge ${isEquipped ? 'badge-equipped' : 'badge-select'}">
                    ${isEquipped ? 'Equipado ✓' : 'Seleccionar'}
                </span>
            </div>
        `;

        card.addEventListener("click", () => {
            selectTechComponent(catKey, item);
        });

        resultsContainer.appendChild(card);
    });
}

/**
 * Selecciona un componente, actualiza la fila y recalcula métricas globales
 */
function selectTechComponent(catKey, item) {
    if (currentPreAssemblySelection) {
        currentPreAssemblySelection[catKey] = item.id;
    }

    // Actualizar campos visibles de la fila de forma inmediata
    const nameEl = document.getElementById(`selected-name-${catKey}`);
    const priceEl = document.getElementById(`row-price-${catKey}`);

    if (nameEl) nameEl.innerText = item.name;
    if (priceEl) priceEl.innerText = `$${item.price || 0} USD`;

    // Si se cambia la Placa Madre, actualizar en tiempo real el indicador base en el HUD 3D
    if (catKey === "motherboard") {
        const baseBadge = document.querySelector(".base-badge");
        if (baseBadge) {
            baseBadge.innerHTML = `<span class="badge-dot">●</span> NÚCLEO BASE: ${item.name} (${item.socket})`;
        }
    }

    // Recalcular totales globales y compatibilidad
    updateBuildSummary();

    // Sincronizar datos con el simulador
    applySelectionToSimulator();

    // Re-renderizar los resultados de la fila para que aparezca "Equipado ✓"
    renderTechRowResults(catKey);

    // Si se cambió la Placa Madre, refrescar también CPU, RAM y Cooler por compatibilidad
    if (catKey === "motherboard") {
        ["cpu", "ram", "cooler"].forEach(k => {
            renderTechRowResults(k);
        });
    }

    // Cerrar suavemente el desplegable tras la selección
    setTimeout(() => {
        closeTechRowDropdown(catKey);
    }, 180);
}

/**
 * Control del estado del Accordion
 */
function openTechRowDropdown(catKey, focusInput = true) {
    if (activeTechAccordionCategory && activeTechAccordionCategory !== catKey) {
        closeTechRowDropdown(activeTechAccordionCategory);
    }

    activeTechAccordionCategory = catKey;
    const row = document.getElementById(`tech-row-${catKey}`);
    const dropdown = document.getElementById(`tech-dropdown-${catKey}`);

    if (row) row.classList.add("open");
    if (dropdown) dropdown.classList.remove("hidden");

    if (focusInput) {
        const input = document.getElementById(`search-input-${catKey}`);
        if (input) input.focus();
    }
}

function closeTechRowDropdown(catKey) {
    if (activeTechAccordionCategory === catKey) {
        activeTechAccordionCategory = null;
    }
    const row = document.getElementById(`tech-row-${catKey}`);
    const dropdown = document.getElementById(`tech-dropdown-${catKey}`);

    if (row) row.classList.remove("open");
    if (dropdown) dropdown.classList.add("hidden");
}

function toggleTechRowDropdown(catKey) {
    if (activeTechAccordionCategory === catKey) {
        closeTechRowDropdown(catKey);
    } else {
        openTechRowDropdown(catKey, false);
    }
}

function closeAllTechRowDropdowns() {
    activeTechAccordionCategory = null;
    document.querySelectorAll(".tech-row").forEach(r => r.classList.remove("open"));
    document.querySelectorAll(".tech-row-dropdown").forEach(d => d.classList.add("hidden"));
}

// Retrocompatibilidad con nombres anteriores
const renderPreAssemblyCards = renderTechComponentRows;
const renderSchematicHotspots = renderTechComponentRows;
function openSchematicDrawer(catKey) { openTechRowDropdown(catKey); }
function closeSchematicDrawer() { closeAllTechRowDropdowns(); }

/**
 * 3. Motor de Cálculo y Validaciones (en tiempo real):
 * Se ejecuta cada vez que el usuario cambia un componente.
 * a) Precio Total ($ USD): Suma el precio de todos los componentes seleccionados.
 * b) Consumo Estimado (W TDP): Suma el consumo en Watts de todos los componentes activos.
 * c) Verificación de Fuente (PSU): Si el consumo total supera el 80% del vataje de la PSU, muestra advertencia.
 * d) Compatibilidad de Socket y RAM: Compara el socket de la CPU con la Motherboard y tipo de RAM con la Motherboard.
 * e) Estado de Compatibilidad: Actualiza el texto a "VERIFICADA ✓" (verde) o "INCOMPATIBLE ⚠️: [motivo]" (rojo).
 */
function updateBuildSummary() {
    let totalPrice = 0;
    let totalTdp = 0;

    const buildItems = {};
    if (currentPreAssemblySelection && preAssemblyDatabase) {
        categoriesOrder.forEach(catKey => {
            const selectedId = currentPreAssemblySelection[catKey];
            const cat = preAssemblyDatabase[catKey];
            if (cat && cat.items) {
                const item = cat.items.find(i => i.id === selectedId);
                buildItems[catKey] = item;
                if (item) {
                    // a) Precio Total
                    totalPrice += (Number(item.price) || 0);

                    // b) Consumo Estimado (TDP en Watts) de componentes activos
                    if (item.tdp && Number(item.tdp) > 0) {
                        totalTdp += Number(item.tdp);
                    }
                }
            }
        });
    }

    // Actualizar Precio Total en UI
    const priceEl = document.getElementById("select-total-price");
    if (priceEl) {
        priceEl.innerText = `$${Math.round(totalPrice)} USD`;
    }

    // Actualizar Consumo Estimado TDP en UI
    const tdpEl = document.getElementById("select-total-tdp");
    if (tdpEl) {
        tdpEl.innerText = `${Math.round(totalTdp)}W (TDP)`;
    }

    // Verificaciones y validaciones
    const issues = [];
    const cpu = buildItems.cpu;
    const mb = buildItems.motherboard;
    const ram = buildItems.ram;
    const psu = buildItems.psu;
    const cooler = buildItems.cooler;

    // d) Compatibilidad de Socket: Compara el socket de la CPU con la Motherboard
    if (cpu && mb && cpu.socket && mb.socket) {
        if (cpu.socket.trim().toUpperCase() !== mb.socket.trim().toUpperCase()) {
            issues.push(`Socket CPU (${cpu.socket}) incompatible con Motherboard (${mb.socket})`);
        }
    }

    // d) Compatibilidad de Tipo de RAM: Compara tipo de RAM (DDR4/DDR5) con la Motherboard
    if (ram && mb && ram.ramType && mb.ramType) {
        if (ram.ramType.trim().toUpperCase() !== mb.ramType.trim().toUpperCase()) {
            issues.push(`RAM (${ram.ramType}) incompatible con Motherboard (${mb.ramType})`);
        }
    }

    // Compatibilidad adicional: Socket del Cooler vs Motherboard
    if (cooler && mb && cooler.supportedSockets && cooler.supportedSockets.length && mb.socket) {
        const socketOk = cooler.supportedSockets.some(s => s.trim().toUpperCase() === mb.socket.trim().toUpperCase());
        if (!socketOk) {
            issues.push(`Disipador no soporta socket ${mb.socket}`);
        }
    }

    // c) Verificación de Fuente (PSU):
    // Si el consumo total supera el 80% del vataje de la PSU seleccionada, muestra advertencia de potencia insuficiente
    if (psu && psu.wattage) {
        const psuWatts = Number(psu.wattage);
        const maxRecommendedWatts = psuWatts * 0.8;
        if (totalTdp > maxRecommendedWatts) {
            issues.push(`Potencia insuficiente (Consumo ${Math.round(totalTdp)}W supera el 80% de PSU ${psuWatts}W [máx ${Math.round(maxRecommendedWatts)}W])`);
        }
    }

    // e) Estado de Compatibilidad: "VERIFICADA ✓" (verde) o "INCOMPATIBLE ⚠️: [motivo del fallo]" (rojo)
    const compatBadge = document.getElementById("select-compat-status");
    const compatText = document.getElementById("select-compat-text");

    if (compatBadge && compatText) {
        if (issues.length === 0) {
            compatBadge.className = "compat-badge-ok";
            compatText.innerText = "VERIFICADA ✓";
        } else {
            compatBadge.className = "compat-badge-danger";
            compatText.innerText = `INCOMPATIBLE ⚠️: ${issues[0]}`;
        }
    }

    return {
        totalPrice,
        totalTdp,
        isCompatible: issues.length === 0,
        issues
    };
}

// Alias de retrocompatibilidad
function updatePreAssemblyMetrics() {
    return updateBuildSummary();
}

function applySelectionToSimulator() {
    if (!currentPreAssemblySelection || !preAssemblyDatabase) return;

    // 1. Reflejar la Placa Madre seleccionada en el indicador base del chasis
    const mbCat = preAssemblyDatabase.motherboard;
    const mbItem = mbCat && mbCat.items ? mbCat.items.find(i => i.id === currentPreAssemblySelection.motherboard) : null;
    const baseBadge = document.querySelector(".base-badge");
    if (baseBadge && mbItem) {
        baseBadge.innerHTML = `<span class="badge-dot">●</span> NÚCLEO BASE: ${mbItem.name} (${mbItem.socket})`;
    }

    // 2. Conectar cada componente seleccionado a su ficha en componentsData
    for (let catKey in currentPreAssemblySelection) {
        const cat = preAssemblyDatabase[catKey];
        if (!cat || !cat.items) continue;
        const item = cat.items.find(i => i.id === currentPreAssemblySelection[catKey]);
        if (!item) continue;

        if (componentsData && componentsData[catKey]) {
            componentsData[catKey].name = item.name;
            componentsData[catKey].modalTitle = `${item.name}`;
            componentsData[catKey].price = `$${item.price || 0} USD`;
            componentsData[catKey].tdp = item.tdp > 0 ? `${item.tdp}W TDP` : (item.wattage ? `${item.wattage}W Potencia` : 'Bajo Consumo');
            componentsData[catKey].highlight = item.spec || 'Componente Seleccionado';

            // Personalización técnica de descripciones y guía educativa por componente
            if (catKey === "cpu") {
                componentsData.cpu.compatibility = `Socket ${item.socket} • Soporte ${item.ramType || 'DDR5'}`;
                componentsData.cpu.shortDesc = `Procesador ${item.brand} (${item.spec}) con alta eficiencia y potencia de cálculo.`;
                componentsData.cpu.fullDesc = `El procesador ${item.name} se posiciona directamente en el socket ${item.socket}. Con un consumo de ${item.tdp}W TDP, requiere alineación cuidadosa para asegurar el contacto con los pines sin ejercer fuerza indebida.`;
                if (item.socket === "AM5") {
                    componentsData.cpu.eduTip = "Alinea la marca triangular en una esquina del socket LGA AM5. Asienta el procesador suavemente, cierra el marco metálico de retención (ILM) y baja la palanca hasta bloquearla.";
                } else if (item.socket === "LGA1700") {
                    componentsData.cpu.eduTip = "Alinea las dos muescas laterales del procesador con las guías del socket Intel LGA1700. Cierra la compuerta protectora y baja la palanca asegurándola bajo el gancho lateral.";
                } else {
                    componentsData.cpu.eduTip = "Alinea la marca triangular dorada con el triángulo guía del socket AM4. Se asienta por gravedad sin forzar y se asegura bajando la palanca metálica de sujeción.";
                }
            } else if (catKey === "ram") {
                componentsData.ram.compatibility = `Ranuras DIMM ${item.ramType || 'DDR5'} (Arquitectura Dual-Channel)`;
                componentsData.ram.shortDesc = `Kit de memoria RAM de alta velocidad ${item.spec} para acceso rápido a procesos activos.`;
                componentsData.ram.fullDesc = `Módulos de alto rendimiento con perfil de overclock de fábrica (XMP/EXPO). Instalados en ranuras alternas (2 y 4) duplican el ancho de banda del canal de memoria.`;
                componentsData.ram.eduTip = `Abre las pestañas plásticas laterales de las ranuras DIMM. Alinea la muesca central asimétrica del módulo ${item.ramType || ''} y presiona firmemente en ambos extremos simultáneamente hasta escuchar el 'clic'.`;
            } else if (catKey === "gpu") {
                componentsData.gpu.compatibility = `Ranura PCIe 4.0/5.0 x16 • Fuente sugerida: ${item.recommendedPsuWatts || 650}W`;
                componentsData.gpu.shortDesc = `Aceleradora gráfica ${item.brand} (${item.spec}) para renderizado 3D de alta fidelidad.`;
                componentsData.gpu.fullDesc = `Con un consumo de ${item.tdp}W TDP, la tarjeta gráfica ${item.name} requiere inserción total en el bus PCIe principal conectado directamente a las líneas del procesador.`;
                componentsData.gpu.eduTip = "Abre el seguro de la ranura PCIe x16 superior. Alinea los conectores traseros con las aperturas del gabinete y presiona firmemente hasta que la traba plástica se cierre automáticamente. Fíjala con los tornillos traseros.";
            } else if (catKey === "cooler") {
                componentsData.cooler.compatibility = `Compatible con ${(item.supportedSockets || ['AM4', 'AM5', 'LGA1700']).join(', ')}`;
                componentsData.cooler.shortDesc = `Sistema de refrigeración ${item.type} con capacidad de disipación de ${item.tdpRatingWatts || 200}W.`;
                componentsData.cooler.fullDesc = `Diseñado para evacuar rápidamente el calor concentrado del encapsulado del CPU, evitando el estrangulamiento térmico y garantizando frecuencias turbo estables.`;
                componentsData.cooler.eduTip = "Aplica una pequeña gota de pasta térmica en el centro del procesador. Posiciona el disipador y aprieta los tornillos en patrón cruzado en X de manera progresiva para distribuir la presión por igual.";
            } else if (catKey === "storage") {
                componentsData.storage.compatibility = `Interfaz M.2 NVMe PCIe / Conexión SATA`;
                componentsData.storage.shortDesc = `Unidad de estado sólido (${item.spec}) para carga inmediata del sistema y juegos.`;
                componentsData.storage.fullDesc = `Almacenamiento sin partes mecánicas móviles, resistente a golpes y vibraciones, con tasas de transferencia continuas y mínimas latencias de acceso.`;
                componentsData.storage.eduTip = "Inserta la unidad en su ranura o bahía respectiva. Conéctala con firmeza y asegúrala con su tornillo de montaje o palanca de fijación rápida.";
            } else if (catKey === "psu") {
                componentsData.psu.compatibility = `Formato ATX Estándar • Potencia continua ${item.wattage}W`;
                componentsData.psu.shortDesc = `Fuente de poder con certificación ${item.efficiencyRating || '80-Plus'} de ${item.wattage}W.`;
                componentsData.psu.fullDesc = `Convierte y distribuye la energía en rieles de +12V, +5V y +3.3V con protecciones avanzadas contra sobretensión, cortocircuito y sobrecarga.`;
                componentsData.psu.eduTip = "Orienta el ventilador de la fuente hacia la rejilla de ventilación del chasis para respirar aire fresco del exterior. Fíjala con los 4 tornillos hexagonales en el panel posterior.";
            }
        }
    }

    // 3. Actualizar la visualización del paso activo y la lista lateral de pasos
    if (UI && typeof UI.updateStepDisplay === 'function') {
        UI.updateStepDisplay(currentStepIndex);
    }
}

function openComponentSelectModal() {
    try {
        renderTechComponentRows();
        closeAllTechRowDropdowns();
        const modal = document.getElementById("component-select-modal");
        if (modal) {
            modal.classList.remove("hidden");
            modal.style.display = "flex";
            console.log("Pantalla de Selección de Componentes abierta correctamente.");
        } else {
            console.warn("No se encontró el elemento #component-select-modal en el DOM.");
        }
    } catch (e) {
        console.error("Error al abrir pantalla de selección de componentes:", e);
    }
}

function closeComponentSelectModal() {
    closeAllTechRowDropdowns();
    const modal = document.getElementById("component-select-modal");
    if (modal) {
        modal.classList.add("hidden");
        modal.style.display = "none";
    }
}

// ---------------------------------------------------------
// 8. INTERFAZ DE USUARIO (UI)
// ---------------------------------------------------------
const UI = {
    init() {
        // Toggle de Tema (Modo Claro / Modo Oscuro)
        const themeBtn = document.getElementById("theme-toggle-btn");
        if (themeBtn) {
            themeBtn.addEventListener("click", () => {
                applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
            });
        }
        applyTheme(currentTheme);

        const welcomeScreen = document.getElementById("byteforge-welcome-screen");

        // Función universal: Regresar al Menú Principal (Landing Hub)
        function returnToMainMenu() {
            console.log("Volviendo al Menú Principal...");
            closeComponentSelectModal();
            closeInspectModal();
            closeAboutModal();
            closeCompletionModal();

            // Reset suave de cámara a vista general del chasis
            transitionCamera(new THREE.Vector3(0.6, 1.25, 3.0), new THREE.Vector3(0, 0.92, 0), 1200);

            // Mostrar el Menú Principal con desvanecimiento fluido
            if (welcomeScreen) {
                welcomeScreen.style.display = "flex";
                welcomeScreen.classList.remove("fade-out");
                welcomeScreen.classList.remove("hidden");
            }
        }

        // Botones "VOLVER AL MENÚ PRINCIPAL"
        const returnBtn = document.getElementById("btn-return-main-menu");
        if (returnBtn) returnBtn.addEventListener("click", returnToMainMenu);

        const returnFromSelectBtn = document.getElementById("btn-return-from-select");
        if (returnFromSelectBtn) returnFromSelectBtn.addEventListener("click", returnToMainMenu);

        const selectCloseBtn = document.getElementById("select-modal-close-btn");
        if (selectCloseBtn) selectCloseBtn.addEventListener("click", returnToMainMenu);

        // Cerrar desplegables de selección al hacer clic fuera del acordeón o presionar Escape
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".tech-row") && activeTechAccordionCategory) {
                closeAllTechRowDropdowns();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && activeTechAccordionCategory) {
                closeAllTechRowDropdowns();
            }
        });

        // Opción 1: Iniciar Simulador 3D -> Abre la Pantalla de Selección de Componentes Previa
        const startBtn = document.getElementById("btn-start-simulator") || document.querySelector(".hub-action-card.primary-action");
        if (startBtn) {
            startBtn.addEventListener("click", () => {
                console.log("Iniciando simulador...");
                try {
                    // Ocultar el contenedor de la Landing Page
                    if (welcomeScreen) {
                        welcomeScreen.classList.add("fade-out");
                        welcomeScreen.classList.add("hidden");
                        welcomeScreen.style.display = "none";
                    }
                    // Mostrar la pantalla de Selección de Componentes
                    openComponentSelectModal();
                } catch (err) {
                    console.error("Error al iniciar el configurador de componentes:", err);
                }
            });
        } else {
            console.warn("No se encontró el botón de inicio del simulador (#btn-start-simulator)");
        }

        // Botón "CONTINUAR AL ENSAMBLAJE 3D" desde la pantalla de selección
        const continueBtn = document.getElementById("btn-continue-to-assembly");
        if (continueBtn) {
            continueBtn.addEventListener("click", () => {
                console.log("Continuando al ensamblaje 3D...");
                try {
                    applySelectionToSimulator();
                    closeComponentSelectModal();
                    if (welcomeScreen) {
                        welcomeScreen.classList.add("fade-out");
                        welcomeScreen.classList.add("hidden");
                        welcomeScreen.style.display = "none";
                    }

                    // Asegurar que el canvas y el visor 3D estén visibles
                    const sceneContainer = document.getElementById("scene-container");
                    if (sceneContainer) sceneContainer.style.display = "block";

                    activateStep(0, true);
                    console.log("Ensamblaje 3D iniciado con éxito en Paso 1.");
                } catch (err) {
                    console.error("Error al continuar al ensamblaje 3D:", err);
                }
            });
        } else {
            console.warn("No se encontró el botón #btn-continue-to-assembly");
        }

        // Opción 2: Botón CONÓCENOS (Proyecto de Grado)
        const aboutBtn = document.getElementById("btn-open-about");
        if (aboutBtn) {
            aboutBtn.addEventListener("click", () => {
                console.log("Abriendo modal Conócenos...");
                openAboutModal();
            });
        }

        const aboutModalCloseBtn = document.getElementById("about-modal-close-btn");
        if (aboutModalCloseBtn) {
            aboutModalCloseBtn.addEventListener("click", closeAboutModal);
        }

        // Overlay Conócenos
        const aboutModalOverlay = document.getElementById("about-project-modal");
        if (aboutModalOverlay) {
            aboutModalOverlay.addEventListener("click", (e) => {
                if (e.target === aboutModalOverlay) closeAboutModal();
            });
        }

        // Formulario de Contacto en Modal Conócenos
        const contactForm = document.getElementById("about-contact-form");
        if (contactForm) {
            contactForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const nameInput = document.getElementById("contact-name");
                const emailInput = document.getElementById("contact-email");
                const messageInput = document.getElementById("contact-message");

                const nameVal = nameInput ? nameInput.value.trim() : "";
                const emailVal = emailInput ? emailInput.value.trim() : "";
                const messageVal = messageInput ? messageInput.value.trim() : "";

                if (!nameVal || !emailVal || !messageVal) {
                    alert("Por favor completa todos los campos del formulario.");
                    return;
                }

                // Notificación emergente en verde
                const toast = document.getElementById("success-toast");
                if (toast) {
                    toast.innerText = "¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.";
                    toast.classList.remove("hidden");
                    setTimeout(() => {
                        toast.classList.add("hidden");
                    }, 4000);
                }

                contactForm.reset();
            });
        }

        // Eventos del Modal de Finalización de Ensamble (SPECS DOCK)
        const completionCloseBtn = document.getElementById("completion-modal-close-btn");
        if (completionCloseBtn) {
            completionCloseBtn.addEventListener("click", closeCompletionModal);
        }

        const completionRestartBtn = document.getElementById("btn-completion-restart");
        if (completionRestartBtn) {
            completionRestartBtn.addEventListener("click", resetSimulation);
        }

        const completionMenuBtn = document.getElementById("btn-completion-main-menu");
        if (completionMenuBtn) {
            completionMenuBtn.addEventListener("click", () => {
                closeCompletionModal();
                returnToMainMenu();
            });
        }

        const completionModalOverlay = document.getElementById("assembly-completion-modal");
        if (completionModalOverlay) {
            completionModalOverlay.addEventListener("click", (e) => {
                if (e.target === completionModalOverlay) closeCompletionModal();
            });
        }

        // Botones de navegación del simulador
        document.getElementById("btn-prev").addEventListener("click", () => {
            if (isAnimating) return;
            if (currentStepIndex > 0) activateStep(currentStepIndex - 1);
        });

        document.getElementById("btn-next").addEventListener("click", () => {
            if (isAnimating) return;
            if (currentStepIndex < simulatorSteps.length - 1) activateStep(currentStepIndex + 1);
        });

        // Botón principal de encaje
        const installBtn = document.getElementById("install-btn");
        installBtn.addEventListener("click", fitActiveComponent);

        // Botón Ver Pieza -> Abre Modal Flotante de Inspección
        const inspectBtn = document.getElementById("btn-inspect");
        if (inspectBtn) {
            inspectBtn.addEventListener("click", () => {
                const currentStep = simulatorSteps[currentStepIndex];
                if (currentStep) openInspectModal(currentStep.id);
            });
        }

        // Botón Cerrar Modal (X)
        const modalCloseBtn = document.getElementById("modal-close-btn");
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener("click", closeInspectModal);
        }

        // Cerrar modal al hacer clic en el fondo semitransparente (overlay)
        const modalOverlay = document.getElementById("inspect-modal");
        if (modalOverlay) {
            modalOverlay.addEventListener("click", (e) => {
                if (e.target === modalOverlay) closeInspectModal();
            });
        }

        // Botón Instalar dentro del Modal
        const modalFitBtn = document.getElementById("modal-fit-btn");
        if (modalFitBtn) {
            modalFitBtn.addEventListener("click", () => {
                closeInspectModal();
                fitActiveComponent();
            });
        }

        // Cerrar modales con la tecla Escape
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeInspectModal();
                closeComponentSelectModal();
                closeAboutModal();
                closeCompletionModal();
            }
        });

        // Cerrar modal de selección de componentes al hacer clic en el fondo semitransparente
        const compSelectOverlay = document.getElementById("component-select-modal");
        if (compSelectOverlay) {
            compSelectOverlay.addEventListener("click", (e) => {
                if (e.target === compSelectOverlay) closeComponentSelectModal();
            });
        }

        // Botón Info Educativa
        const eduBtn = document.getElementById("btn-edu");
        const eduCard = document.getElementById("educational-card");
        if (eduBtn && eduCard) {
            eduBtn.addEventListener("click", () => {
                eduCard.classList.toggle("hidden");
            });
        }

        // Botón Vista General
        const resetCamBtn = document.getElementById("btn-reset-cam");
        if (resetCamBtn) {
            resetCamBtn.addEventListener("click", () => {
                if (isAnimating) return;
                transitionCamera(new THREE.Vector3(0.6, 1.25, 3.0), new THREE.Vector3(0, 0.92, 0), 1250);
            });
        }

        // Selección directa en la lista de pasos
        const listItems = document.querySelectorAll("#step-list li");
        listItems.forEach((li, idx) => {
            li.addEventListener("click", () => {
                if (isAnimating) return;
                activateStep(idx);
            });
        });
    },

    updateStepDisplay(stepIndex) {
        const step = simulatorSteps[stepIndex];
        const data = componentsData[step.id];

        // Badge de paso
        const badgeEl = document.getElementById("step-badge");
        if (badgeEl) badgeEl.innerText = `PASO ${stepIndex + 1} DE ${simulatorSteps.length}`;

        // Título y descripción
        const titleEl = document.getElementById("component-title");
        const descEl = document.getElementById("component-description");
        const eduTextEl = document.getElementById("educational-text");
        const statusEl = document.getElementById("component-status");
        const installBtn = document.getElementById("install-btn");
        const inspectBtn = document.getElementById("btn-inspect");

        if (titleEl) titleEl.innerText = data.name || step.name;
        if (descEl) descEl.innerText = data.desc;
        if (eduTextEl) eduTextEl.innerText = data.eduTip;
        if (inspectBtn) inspectBtn.innerText = "🔍 Ver Pieza";

        if (statusEl) {
            const statusTextEl = statusEl.querySelector(".status-text");
            if (data.status === "installed") {
                if (statusTextEl) statusTextEl.innerText = "ESTADO: INSTALADO ✔";
                else statusEl.innerText = "ESTADO: INSTALADO ✔";
                statusEl.className = "status-installed hud-status-badge";
            } else {
                if (statusTextEl) statusTextEl.innerText = "ESTADO: LISTO PARA MONTAJE";
                else statusEl.innerText = "ESTADO: LISTO PARA MONTAJE";
                statusEl.className = "status-pending hud-status-badge";
            }
        }

        if (installBtn) {
            if (data.status === "installed") {
                installBtn.style.display = "none";
            } else {
                installBtn.style.display = "block";
                installBtn.disabled = isAnimating;
                installBtn.innerText = `⚡ ENCAJAR // ${(data.name || step.name).split(" ")[0].toUpperCase()}`;
                installBtn.style.opacity = 1;
            }
        }

        // Actualizar barra segmentada de progreso HUD [|||||.....]
        const segs = document.querySelectorAll(".hud-seg");
        segs.forEach((seg, i) => {
            const itemStepId = simulatorSteps[i].id;
            const isInstalled = (componentsData[itemStepId].status === "installed");
            const isActive = (i === stepIndex);
            seg.classList.toggle("completed", isInstalled);
            seg.classList.toggle("active", isActive && !isInstalled);
        });

        // Actualizar lista izquierda con números y estado
        const listItems = document.querySelectorAll("#step-list li");
        listItems.forEach((li, i) => {
            li.className = (i === stepIndex) ? "active" : "";
            const itemStepId = simulatorSteps[i].id;
            const isInstalled = (componentsData[itemStepId].status === "installed");
            if (isInstalled) {
                li.classList.add("installed");
            }
            const stepNameEl = li.querySelector(".step-name");
            if (stepNameEl && componentsData[itemStepId] && componentsData[itemStepId].name) {
                stepNameEl.innerText = componentsData[itemStepId].name;
            }
            const statusIcon = li.querySelector(".step-status-icon");
            if (statusIcon) {
                if (isInstalled) statusIcon.innerText = "✔";
                else if (i === stepIndex) statusIcon.innerText = "▶";
                else statusIcon.innerText = "○";
            }
        });

        // Botones de navegación
        const btnPrev = document.getElementById("btn-prev");
        const btnNext = document.getElementById("btn-next");
        if (btnPrev) btnPrev.disabled = (stepIndex === 0 || isAnimating);
        if (btnNext) btnNext.disabled = (stepIndex === simulatorSteps.length - 1 || isAnimating);
    },

    handleSuccess(compId) {
        const data = componentsData[compId];
        data.status = "installed";

        // Notificación de éxito
        const toast = document.getElementById("success-toast");
        if (toast) {
            toast.innerText = `¡${data.name} instalado con éxito! 🟢`;
            toast.classList.remove("hidden");
            setTimeout(() => toast.classList.add("hidden"), 3000);
        }

        // Progreso
        const installedTotal = simulatorSteps.filter(s => componentsData[s.id].status === "installed").length;
        const progressText = document.getElementById("progress-text");
        const progressFill = document.getElementById("progress-fill");

        if (progressText) progressText.innerText = `${installedTotal}/${simulatorSteps.length}`;
        if (progressFill) progressFill.style.width = `${(installedTotal / simulatorSteps.length) * 100}%`;

        this.updateStepDisplay(currentStepIndex);

        // Si hay un siguiente paso pendiente, avanzar automáticamente de forma fluida tras 1.2 segundos
        if (currentStepIndex < simulatorSteps.length - 1) {
            setTimeout(() => {
                if (!isAnimating && componentsData[simulatorSteps[currentStepIndex + 1].id].status === "pending") {
                    activateStep(currentStepIndex + 1);
                }
            }, 1200);
        } else if (installedTotal === simulatorSteps.length) {
            // Felicitaciones al completar todo el equipo
            setTimeout(() => {
                transitionCamera(new THREE.Vector3(0.6, 1.25, 3.0), new THREE.Vector3(0, 0.92, 0), 1600);
                if (toast) {
                    toast.innerText = "🎉 ¡MÓDULO COMPLETADO! PC ENSAMBLADA AL 100%";
                    toast.classList.remove("hidden");
                }
                // Desplegar automáticamente ventana modal pop-up "SPECS DOCK / INFORME DE ENSAMBLE"
                setTimeout(() => {
                    openCompletionModal();
                }, 900);
            }, 800);
        }
    }
};

// ---------------------------------------------------------
// 9. INICIALIZACIÓN Y BUCLE DE RENDER
// ---------------------------------------------------------
try {
    UI.init();
} catch (e) {
    console.error("Fallo al inicializar la UI:", e);
}

// Carga asíncrona inicial de la base de datos de componentes
loadComponentsData().catch(e => console.error("Error en loadComponentsData:", e));

// Exposición global para depuración y pruebas
window.loadComponentsData = loadComponentsData;
window.updateBuildSummary = updateBuildSummary;
window.renderPreAssemblyCards = renderPreAssemblyCards;
window.renderTechComponentRows = renderTechComponentRows;
window.openTechRowDropdown = openTechRowDropdown;
window.closeTechRowDropdown = closeTechRowDropdown;
window.openAboutModal = openAboutModal;
window.closeAboutModal = closeAboutModal;
window.openCompletionModal = openCompletionModal;
window.closeCompletionModal = closeCompletionModal;
window.resetSimulation = resetSimulation;
window.currentPreAssemblySelection = currentPreAssemblySelection;
window.preAssemblyDatabase = preAssemblyDatabase;
window.byteforgeDatabase = byteforgeDatabase;

loadUnifiedModel();

function animate(time) {
    requestAnimationFrame(animate);

    tweenManager.update(time);
    controls.update();
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Ajustar también el mini visor 3D del modal si está activo
    if (modalViewerRenderer && modalViewerCamera) {
        const container = document.getElementById("component-viewer-3d");
        if (container && container.clientWidth && container.clientHeight) {
            modalViewerCamera.aspect = container.clientWidth / container.clientHeight;
            modalViewerCamera.updateProjectionMatrix();
            modalViewerRenderer.setSize(container.clientWidth, container.clientHeight);
        }
    }
});

animate();
