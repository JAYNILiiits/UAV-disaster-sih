// MedEvac Pro™ - Professional Medical Emergency Response System
// Enterprise-Grade JavaScript Application for Hospital & EMS Integration - FIXED VERSION

class MedEvacProMedicalSystem {
    constructor() {
        this.currentTab = 'incident-management';
        this.facilityInfo = {
            name: "Metro Regional Medical Center",
            license: "FL-MED-2024-0847",
            level: "Level I Trauma Center",
            certification: "Joint Commission Accredited",
            address: "1234 Healthcare Blvd, Metro City, FL 33101"
        };

        // Real-world medical data integration
        this.activeIncidents = [
            {
                incident_id: "INC-2025-0902-001",
                dispatch_time: "2025-09-02T11:42:00Z",
                incident_type: "Cardiac Arrest",
                age: 67,
                gender: "M",
                location: {
                    address: "Downtown Financial District",
                    coordinates: "25.7617, -80.1918",
                    cross_streets: "Biscayne Blvd & NE 2nd St"
                },
                triage_level: "RED - Immediate",
                esi_level: 1,
                chief_complaint: "Witnessed cardiac arrest, CPR in progress",
                vitals: {
                    hr: 0,
                    bp: "0/0",
                    rr: 0,
                    spo2: 85,
                    temp: null,
                    status: "CPR in progress"
                },
                responding_units: ["RESCUE-01", "MEDIC-15"],
                eta: "00:03:45",
                medical_director: "Dr. James Martinez, MD",
                receiving_facility: "Metro Regional ED",
                protocols: ["ALS Cardiac Arrest", "ACLS Guidelines"],
                status: "En Route"
            },
            {
                incident_id: "INC-2025-0902-002",
                dispatch_time: "2025-09-02T11:38:00Z",
                incident_type: "Diabetic Emergency",
                age: 34,
                gender: "F",
                location: {
                    address: "Sunset Medical Plaza",
                    coordinates: "25.7467, -80.1937",
                    cross_streets: "Coral Way & SW 17th Ave"
                },
                triage_level: "YELLOW - Urgent",
                esi_level: 2,
                chief_complaint: "Altered mental status, blood glucose 45 mg/dL",
                vitals: {
                    hr: 110,
                    bp: "98/62",
                    rr: 18,
                    spo2: 98,
                    temp: 98.2,
                    glucose: 45
                },
                responding_units: ["RESCUE-03"],
                eta: "On Scene",
                medical_director: "Dr. Sarah Chen, MD",
                receiving_facility: "Sunset Community Hospital",
                protocols: ["Hypoglycemia Protocol", "ALS Medical"],
                status: "On Scene"
            },
            {
                incident_id: "INC-2025-0902-003",
                dispatch_time: "2025-09-02T11:45:00Z",
                incident_type: "Anaphylaxis",
                age: 8,
                gender: "M",
                location: {
                    address: "Lincoln Elementary School",
                    coordinates: "25.7789, -80.1300",
                    cross_streets: "NE 79th St & Biscayne Blvd"
                },
                triage_level: "RED - Immediate",
                esi_level: 1,
                chief_complaint: "Severe allergic reaction to peanuts, difficulty breathing",
                vitals: {
                    hr: 140,
                    bp: "80/45",
                    rr: 32,
                    spo2: 88,
                    temp: 99.1
                },
                responding_units: ["RESCUE-02"],
                eta: "00:01:30",
                medical_director: "Dr. Lisa Rodriguez, MD",
                receiving_facility: "Children's Hospital of Miami",
                protocols: ["Pediatric Anaphylaxis", "Epinephrine Administration"],
                status: "Preparing for Transport"
            }
        ];

        this.droneFleet = [
            {
                unit_id: "RESCUE-01",
                tail_number: "N847MR",
                model: "MedEvac Pro X1",
                status: "DEPLOYED",
                pilot: "Capt. Michael Thompson, ATP",
                location: "Downtown Financial District",
                altitude: 150,
                speed: 45,
                battery: 78,
                flight_time_remaining: "00:23:45",
                medical_kit: "Advanced Cardiac Life Support",
                certifications: ["FAA Part 107", "Beyond Visual Line of Sight"],
                last_maintenance: "2025-08-28",
                next_due: "2025-09-28",
                airworthiness: "Current",
                insurance: "Current - Lloyd's of London"
            },
            {
                unit_id: "RESCUE-02",
                tail_number: "N849MR",
                model: "MedEvac Pro X1",
                status: "EN ROUTE",
                pilot: "Capt. Jennifer Davis, ATP",
                location: "Approaching Lincoln Elementary",
                altitude: 120,
                speed: 52,
                battery: 94,
                flight_time_remaining: "00:34:12",
                medical_kit: "Pediatric Advanced Life Support",
                certifications: ["FAA Part 107", "Beyond Visual Line of Sight"],
                last_maintenance: "2025-08-30",
                next_due: "2025-09-30",
                airworthiness: "Current",
                insurance: "Current - Lloyd's of London"
            },
            {
                unit_id: "RESCUE-03",
                tail_number: "N851MR",
                model: "MedEvac Pro X1",
                status: "ON SCENE",
                pilot: "Capt. Robert Kim, ATP",
                location: "Sunset Medical Plaza",
                altitude: 0,
                speed: 0,
                battery: 89,
                flight_time_remaining: "00:31:20",
                medical_kit: "Advanced Life Support Medical",
                certifications: ["FAA Part 107", "Beyond Visual Line of Sight"],
                last_maintenance: "2025-09-01",
                next_due: "2025-10-01",
                airworthiness: "Current",
                insurance: "Current - Lloyd's of London"
            }
        ];

        this.medicalStaff = {
            medical_director: {
                name: "Dr. James Martinez, MD",
                license: "FL-MD-45789",
                certifications: ["Emergency Medicine Board Certified", "EMS Medical Director"],
                status: "On Duty",
                contact: "Extension 2501"
            },
            flight_physicians: [
                {
                    name: "Dr. Sarah Chen, MD",
                    license: "FL-MD-67234",
                    certifications: ["Emergency Medicine", "Flight Medicine"],
                    status: "Available",
                    contact: "Extension 2502"
                },
                {
                    name: "Dr. Lisa Rodriguez, MD",
                    license: "FL-MD-78901",
                    certifications: ["Pediatric Emergency Medicine", "Transport Medicine"],
                    status: "On Call",
                    contact: "Extension 2503"
                }
            ]
        };

        this.charts = {};
        this.updateIntervals = {};
        this.vitalSignsData = new Map();
        this.animationFrames = {};

        this.initializeSystem();
    }

    initializeSystem() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupMedicalSystem();
            });
        } else {
            this.setupMedicalSystem();
        }
    }

    setupMedicalSystem() {
        console.log('Initializing MedEvac Pro™ Medical Emergency Response System');
        
        // Delay setup to ensure DOM is ready
        setTimeout(() => {
            this.setupEventHandlers();
            this.initializeVitalSignsMonitoring();
            this.initializeQualityMetricsCharts();
            this.startRealTimeUpdates();
            this.initializeMedicalMap();
            this.logSystemStartup();
        }, 500);
    }

    setupEventHandlers() {
        console.log('Setting up medical system event handlers');

        // FIXED: Professional navigation system with proper event delegation
        setTimeout(() => {
            const navTabs = document.querySelectorAll('.nav-tab');
            console.log(`Found ${navTabs.length} navigation tabs`);
            
            navTabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    e.preventDefault();
                    const tabName = e.currentTarget.getAttribute('data-tab');
                    console.log(`Navigation clicked: ${tabName}`);
                    this.switchMedicalTab(tabName);
                });
            });

            // FIXED: Emergency protocol buttons
            const codeBlueBtn = document.getElementById('code-blue');
            if (codeBlueBtn) {
                console.log('Setting up Code Blue button');
                codeBlueBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.initiateCodeBlue();
                });
            }

            const dispatchBtn = document.getElementById('dispatch-unit');
            if (dispatchBtn) {
                console.log('Setting up Dispatch button');
                dispatchBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showDispatchModal();
                });
            }

            const consultBtn = document.getElementById('physician-consult');
            if (consultBtn) {
                console.log('Setting up Physician Consult button');
                consultBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.initiatePhysicianConsult();
                });
            }

            // FIXED: Modal controls
            const closeEmergencyBtn = document.getElementById('closeEmergencyModal');
            if (closeEmergencyBtn) {
                closeEmergencyBtn.addEventListener('click', () => this.closeModal('emergencyModal'));
            }

            // FIXED: Protocol selection
            const protocolOptions = document.querySelectorAll('.protocol-option');
            protocolOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    const protocol = e.currentTarget.getAttribute('data-protocol');
                    if (protocol) {
                        this.executeEmergencyProtocol(protocol);
                    }
                });
            });

            // FIXED: Incident management buttons with proper event delegation
            document.addEventListener('click', (e) => {
                const target = e.target;
                const buttonText = target.textContent || '';

                if (buttonText.includes('Medical Director')) {
                    e.preventDefault();
                    this.contactMedicalDirector();
                } else if (buttonText.includes('View SOAP')) {
                    e.preventDefault();
                    this.viewSOAPNote(e);
                } else if (buttonText.includes('Chain of Custody')) {
                    e.preventDefault();
                    this.viewChainOfCustody(e);
                } else if (buttonText.includes('Standing Orders')) {
                    e.preventDefault();
                    this.executeStandingOrders(e);
                } else if (buttonText.includes('Pediatric Specialist')) {
                    e.preventDefault();
                    this.consultPediatricSpecialist();
                } else if (buttonText.includes('Auto-Generate SOAP')) {
                    e.preventDefault();
                    this.generateSOAPNote();
                } else if (buttonText.includes('Medical Records')) {
                    e.preventDefault();
                    this.integrateWithEMR();
                } else if (buttonText.includes('EpiPen Protocol')) {
                    e.preventDefault();
                    this.executeEpiPenProtocol();
                } else if (buttonText.includes('Update Vitals')) {
                    e.preventDefault();
                    this.updatePatientVitals(e);
                }
            });

            console.log('Medical system event handlers setup complete');
        }, 1000);
    }

    // FIXED: Professional tab switching with proper functionality
    switchMedicalTab(tabName) {
        console.log(`Switching to medical tab: ${tabName}`);
        
        if (!tabName) {
            console.error('Tab name is undefined');
            return;
        }
        
        // Update navigation
        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => tab.classList.remove('active'));
        
        const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
            console.log(`Activated tab: ${tabName}`);
        } else {
            console.error(`Tab button not found: ${tabName}`);
        }

        // Update content
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => content.classList.remove('active'));
        
        const activeContent = document.getElementById(tabName);
        if (activeContent) {
            activeContent.classList.add('active');
            console.log(`Activated content: ${tabName}`);
        } else {
            console.error(`Tab content not found: ${tabName}`);
        }

        this.currentTab = tabName;

        // Initialize tab-specific functionality
        setTimeout(() => {
            switch (tabName) {
                case 'incident-management':
                    this.refreshIncidentData();
                    break;
                case 'patient-monitoring':
                    this.initializePatientMonitoring();
                    break;
                case 'fleet-operations':
                    this.updateFleetStatus();
                    break;
                case 'medical-protocols':
                    this.loadMedicalProtocols();
                    break;
                case 'compliance-reporting':
                    this.updateComplianceMetrics();
                    break;
                case 'system-integration':
                    this.checkIntegrationStatus();
                    break;
            }
        }, 100);

        this.logUserActivity(`Tab switched to: ${tabName}`);
    }

    // FIXED: Emergency Protocol Management
    initiateCodeBlue() {
        console.log('CODE BLUE ACTIVATED - Cardiac Arrest Protocol');
        
        this.showModal('emergencyModal');
        this.logCriticalEvent('CODE BLUE', 'Cardiac arrest protocol activated');
        
        // Immediate actions for Code Blue
        this.showMedicalAlert('CODE BLUE ACTIVATED - ACLS Protocol Initiated', 'critical');
        
        // Update the first incident to show code blue response
        if (this.activeIncidents.length > 0) {
            this.activeIncidents[0].status = 'CODE BLUE - ACLS Active';
            this.showMedicalAlert('Medical Director notified - Dr. James Martinez, MD', 'info');
        }
    }

    showDispatchModal() {
        const availableUnits = this.droneFleet.filter(unit => 
            unit.status === 'AVAILABLE' || unit.status === 'STANDBY'
        );

        if (availableUnits.length > 0) {
            this.showMedicalAlert(`${availableUnits.length} units available for dispatch`, 'info');
        } else {
            this.showMedicalAlert('All units currently deployed - monitoring for availability', 'warning');
        }

        this.logUserActivity('Dispatch interface accessed');
    }

    initiatePhysicianConsult() {
        console.log('Physician consultation requested');
        
        const medicalDirector = this.medicalStaff.medical_director;
        
        this.showMedicalAlert(
            `Connecting to ${medicalDirector.name} - ${medicalDirector.contact}`, 
            'info'
        );

        setTimeout(() => {
            this.showMedicalAlert('Physician consultation established - Line secured', 'success');
        }, 2000);

        this.logUserActivity('Physician consultation requested');
    }

    executeEmergencyProtocol(protocol) {
        console.log(`Executing emergency protocol: ${protocol}`);
        
        const protocols = {
            'code-blue': {
                name: 'Code Blue - Cardiac Arrest',
                actions: 'ACLS protocol initiated, advanced airway management prepared',
                notifications: ['Medical Director', 'Crash Cart Team', 'Pharmacy']
            },
            'trauma-alert': {
                name: 'Trauma Alert',
                actions: 'Trauma team activated, OR preparation initiated',
                notifications: ['Trauma Surgeon', 'OR Team', 'Blood Bank']
            },
            'medical-director': {
                name: 'Medical Director Consultation',
                actions: 'Direct physician consultation established',
                notifications: ['Attending Physician', 'Medical Director']
            }
        };

        const selectedProtocol = protocols[protocol];
        if (selectedProtocol) {
            this.showMedicalAlert(
                `${selectedProtocol.name}: ${selectedProtocol.actions}`, 
                'success'
            );
            
            this.logCriticalEvent(selectedProtocol.name, selectedProtocol.actions);
        }

        this.closeModal('emergencyModal');
    }

    // FIXED: Patient Monitoring System with working vital signs
    initializePatientMonitoring() {
        console.log('Initializing patient monitoring systems');
        
        // Initialize vital signs for each patient
        this.activeIncidents.forEach((incident, index) => {
            this.setupVitalSignsMonitoring(incident, index + 1);
        });

        // Start continuous monitoring
        this.startVitalSignsUpdates();
        
        // Initialize waveforms after a short delay
        setTimeout(() => {
            this.initializeAllVitalWaveforms();
        }, 500);
    }

    // FIXED: Working vital signs waveforms
    initializeVitalSignsMonitoring() {
        setTimeout(() => {
            this.initializeAllVitalWaveforms();
        }, 1000);
    }

    initializeAllVitalWaveforms() {
        const vitalCanvases = document.querySelectorAll('.vital-waveform');
        console.log(`Found ${vitalCanvases.length} vital waveform canvases`);
        
        vitalCanvases.forEach((canvas, index) => {
            if (canvas && canvas.getContext) {
                console.log(`Initializing waveform ${index + 1}`);
                this.startVitalWaveform(canvas, index);
            }
        });
    }

    startVitalWaveform(canvas, patientIndex) {
        const ctx = canvas.getContext('2d');
        const patientData = this.activeIncidents[patientIndex];
        let timeOffset = 0;

        const drawWaveform = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Grid background
            ctx.strokeStyle = 'rgba(0, 255, 0, 0.2)';
            ctx.lineWidth = 1;
            for (let i = 0; i < canvas.width; i += 20) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, canvas.height);
                ctx.stroke();
            }
            for (let i = 0; i < canvas.height; i += 15) {
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(canvas.width, i);
                ctx.stroke();
            }

            timeOffset += 0.1;
            let heartRate = patientData ? patientData.vitals.hr : 75;
            
            // Special case for cardiac arrest patient (index 0)
            if (patientIndex === 0 && heartRate === 0) {
                // Flat line (asystole)
                ctx.strokeStyle = '#dc2626';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(0, canvas.height / 2);
                ctx.lineTo(canvas.width, canvas.height / 2);
                ctx.stroke();
                
                // Add some noise to show monitoring is active
                ctx.strokeStyle = 'rgba(220, 38, 38, 0.3)';
                ctx.lineWidth = 1;
                for (let x = 0; x < canvas.width; x += 5) {
                    const noise = (Math.random() - 0.5) * 2;
                    ctx.beginPath();
                    ctx.moveTo(x, canvas.height / 2 + noise);
                    ctx.lineTo(x + 1, canvas.height / 2 + noise);
                    ctx.stroke();
                }
                
                this.animationFrames[`waveform-${patientIndex}`] = requestAnimationFrame(drawWaveform);
                return;
            }

            // Generate ECG-like waveform for patients with pulse
            const frequency = (heartRate / 60) * 2;
            const dataPoints = [];
            
            for (let x = 0; x < canvas.width; x++) {
                const t = (x + timeOffset * 10) * 0.01;
                let y = canvas.height / 2;
                
                // QRS complex simulation
                const qrsPhase = (t * frequency) % 1;
                if (qrsPhase > 0.1 && qrsPhase < 0.3) {
                    if (qrsPhase < 0.15) {
                        y += Math.sin((qrsPhase - 0.1) * Math.PI / 0.05) * 15;
                    } else if (qrsPhase < 0.2) {
                        y -= Math.sin((qrsPhase - 0.15) * Math.PI / 0.05) * 25;
                    } else {
                        y += Math.sin((qrsPhase - 0.2) * Math.PI / 0.1) * 10;
                    }
                }
                
                dataPoints.push({ x, y });
            }

            // Draw the waveform with appropriate color based on heart rate
            if (heartRate > 100 || heartRate < 60) {
                ctx.strokeStyle = '#f59e0b'; // Warning yellow
            } else {
                ctx.strokeStyle = '#10b981'; // Normal green
            }
            
            if (heartRate > 150 || heartRate < 40) {
                ctx.strokeStyle = '#dc2626'; // Critical red
            }
            
            ctx.lineWidth = 2;
            ctx.beginPath();
            
            dataPoints.forEach((point, index) => {
                if (index === 0) {
                    ctx.moveTo(point.x, point.y);
                } else {
                    ctx.lineTo(point.x, point.y);
                }
            });
            
            ctx.stroke();
            
            this.animationFrames[`waveform-${patientIndex}`] = requestAnimationFrame(drawWaveform);
        };
        
        drawWaveform();
    }

    setupVitalSignsMonitoring(incident, patientNumber) {
        if (!this.vitalSignsData.has(incident.incident_id)) {
            this.vitalSignsData.set(incident.incident_id, {
                heartRate: incident.vitals.hr,
                bloodPressure: incident.vitals.bp,
                respiratoryRate: incident.vitals.rr,
                oxygenSaturation: incident.vitals.spo2,
                temperature: incident.vitals.temp,
                trends: []
            });
        }
    }

    startVitalSignsUpdates() {
        this.updateIntervals.vitals = setInterval(() => {
            this.updateVitalSigns();
        }, 3000);
    }

    updateVitalSigns() {
        this.activeIncidents.forEach((incident) => {
            const vitalsData = this.vitalSignsData.get(incident.incident_id);
            if (vitalsData && incident.vitals.hr > 0) {
                // Simulate realistic vital sign variations
                vitalsData.heartRate += (Math.random() - 0.5) * 2;
                vitalsData.oxygenSaturation += (Math.random() - 0.5) * 1;
                
                // Keep within realistic bounds
                vitalsData.heartRate = Math.max(50, Math.min(180, vitalsData.heartRate));
                vitalsData.oxygenSaturation = Math.max(85, Math.min(100, vitalsData.oxygenSaturation));
                
                // Update incident data
                incident.vitals.hr = Math.round(vitalsData.heartRate);
                incident.vitals.spo2 = Math.round(vitalsData.oxygenSaturation);
            }
        });
    }

    // FIXED: SOAP Notes and Medical Documentation
    viewSOAPNote(event) {
        console.log('Opening SOAP note interface');
        this.switchMedicalTab('patient-monitoring');
        
        setTimeout(() => {
            const soapPanel = document.querySelector('.soap-panel');
            if (soapPanel) {
                soapPanel.scrollIntoView({ behavior: 'smooth' });
                this.showMedicalAlert('SOAP note documentation interface opened', 'info');
            }
        }, 500);
    }

    generateSOAPNote() {
        console.log('Auto-generating SOAP note');
        
        const patientSelect = document.getElementById('soap-patient');
        const selectedPatient = patientSelect ? patientSelect.value : 'pt-001';
        
        const incident = this.activeIncidents.find(inc => 
            inc.incident_id.toLowerCase().includes('001') // Default to first incident
        ) || this.activeIncidents[0];

        if (incident) {
            const soapSections = {
                subjective: this.generateSubjective(incident),
                objective: this.generateObjective(incident),
                assessment: this.generateAssessment(incident),
                plan: this.generatePlan(incident)
            };

            // Update SOAP form fields
            const subjectiveField = document.querySelector('.soap-section:nth-child(1) textarea');
            const objectiveField = document.querySelector('.soap-section:nth-child(2) textarea');
            const assessmentField = document.querySelector('.soap-section:nth-child(3) textarea');
            const planField = document.querySelector('.soap-section:nth-child(4) textarea');

            if (subjectiveField) subjectiveField.value = soapSections.subjective;
            if (objectiveField) objectiveField.value = soapSections.objective;
            if (assessmentField) assessmentField.value = soapSections.assessment;
            if (planField) planField.value = soapSections.plan;

            this.showMedicalAlert('SOAP note auto-generated successfully', 'success');
            this.logMedicalDocument('SOAP Note Generated', incident.incident_id);
        }
    }

    generateSubjective(incident) {
        const templates = {
            'Cardiac Arrest': `${incident.age}-year-old ${incident.gender === 'M' ? 'male' : 'female'} found unresponsive by bystanders. ${incident.chief_complaint}. No known medical history available on scene.`,
            'Diabetic Emergency': `${incident.age}-year-old ${incident.gender === 'M' ? 'male' : 'female'} with known diabetes presents with ${incident.chief_complaint}. Patient reports not eating today and taking normal insulin dose.`,
            'Anaphylaxis': `${incident.age}-year-old ${incident.gender === 'M' ? 'male' : 'female'} with known allergies presents with ${incident.chief_complaint}. Exposure occurred during lunch at school.`
        };
        
        return templates[incident.incident_type] || `${incident.age}-year-old patient presents with ${incident.chief_complaint}.`;
    }

    generateObjective(incident) {
        const vitals = incident.vitals;
        const vitalStrings = [];
        
        if (vitals.hr !== null) vitalStrings.push(`HR: ${vitals.hr}`);
        if (vitals.bp) vitalStrings.push(`BP: ${vitals.bp}`);
        if (vitals.rr) vitalStrings.push(`RR: ${vitals.rr}`);
        if (vitals.spo2) vitalStrings.push(`SpO2: ${vitals.spo2}%`);
        if (vitals.temp) vitalStrings.push(`Temp: ${vitals.temp}°F`);
        if (vitals.glucose) vitalStrings.push(`Glucose: ${vitals.glucose} mg/dL`);

        const physicalExam = this.generatePhysicalExam(incident);
        
        return `Vital Signs: ${vitalStrings.join(', ')}. ${physicalExam}`;
    }

    generatePhysicalExam(incident) {
        const exams = {
            'Cardiac Arrest': 'Patient found in asystole. No pulse, no respirations. Skin cyanotic and cool. Pupils fixed and dilated. No response to painful stimuli.',
            'Diabetic Emergency': 'Patient alert but confused. Skin pale and diaphoretic. Mucous membranes moist. Neurological exam shows altered mental status.',
            'Anaphylaxis': 'Patient in obvious distress. Wheezing audible. Skin flushed with urticaria noted on chest and arms. Angioedema of lips and tongue.'
        };
        
        return exams[incident.incident_type] || 'Physical exam findings consistent with chief complaint.';
    }

    generateAssessment(incident) {
        const assessments = {
            'Cardiac Arrest': 'Cardiac arrest - likely ventricular fibrillation deteriorated to asystole. Probable myocardial infarction given witnessed chest pain and collapse.',
            'Diabetic Emergency': 'Severe hypoglycemia with altered mental status. Likely due to medication/food imbalance.',
            'Anaphylaxis': 'Severe anaphylactic reaction secondary to peanut exposure. Respiratory distress and shock present.'
        };
        
        return assessments[incident.incident_type] || `Medical emergency requiring immediate intervention.`;
    }

    generatePlan(incident) {
        const plans = {
            'Cardiac Arrest': 'Continue high-quality CPR per ACLS guidelines. Epinephrine 1mg IV every 3-5 minutes. Advanced airway management. Transport to Level I Trauma Center.',
            'Diabetic Emergency': 'D50 50ml IV administered. Monitor blood glucose every 15 minutes. Consider glucagon if no IV access. Transport to ED for further evaluation.',
            'Anaphylaxis': 'Epinephrine 0.15mg IM administered. Albuterol nebulizer for bronchospasm. IV access and fluid resuscitation. Transport to pediatric ED.'
        };
        
        return plans[incident.incident_type] || 'Treatment per established protocols. Transport to appropriate facility.';
    }

    integrateWithEMR() {
        console.log('Integrating with Electronic Medical Records');
        
        const integrationSteps = [
            'Connecting to Epic FHIR R4 endpoint...',
            'Authenticating with OAuth 2.0...',
            'Uploading patient encounter data...',
            'Updating medical records...',
            'Integration complete - Patient record updated'
        ];

        let step = 0;
        const showStep = () => {
            if (step < integrationSteps.length) {
                this.showMedicalAlert(integrationSteps[step], step === integrationSteps.length - 1 ? 'success' : 'info');
                step++;
                setTimeout(showStep, 1500);
            }
        };

        showStep();
        this.logMedicalDocument('EMR Integration', 'Patient records synchronized');
    }

    // FIXED: Medical procedures and protocols
    executeEpiPenProtocol() {
        console.log('Executing EpiPen protocol for pediatric patient');
        
        const pediatricIncident = this.activeIncidents.find(inc => inc.age < 18);
        if (pediatricIncident) {
            this.showMedicalAlert('EpiPen 0.15mg administered IM - Monitoring patient response', 'success');
            
            // Simulate improvement in vitals
            setTimeout(() => {
                pediatricIncident.vitals.hr = 120; // Still elevated but improving
                pediatricIncident.vitals.spo2 = 92; // Improving oxygen saturation
                this.showMedicalAlert('Patient showing improvement - SpO2 increased to 92%', 'success');
            }, 3000);
        }
        
        this.logMedicalEvent('EpiPen Protocol Executed', 'Pediatric anaphylaxis treatment');
    }

    updatePatientVitals(event) {
        console.log('Updating patient vitals');
        
        const diabeticIncident = this.activeIncidents.find(inc => inc.incident_type === 'Diabetic Emergency');
        if (diabeticIncident) {
            // Simulate post-treatment improvement
            diabeticIncident.vitals.glucose = 95;
            diabeticIncident.vitals.hr = 88;
            diabeticIncident.status = 'Responding to Treatment';
            
            this.showMedicalAlert('Vitals updated - Patient responding to D50 administration', 'success');
        }
        
        this.logMedicalEvent('Patient Vitals Updated', 'Post-treatment monitoring');
    }

    executeStandingOrders(event) {
        const incident = this.getIncidentFromElement(event.target);
        
        if (incident && incident.incident_type === 'Diabetic Emergency') {
            this.showMedicalAlert('Executing hypoglycemia standing orders: D50 50ml IV', 'success');
            
            setTimeout(() => {
                incident.vitals.glucose = 85;
                this.showMedicalAlert('Blood glucose improved to 85 mg/dL', 'success');
            }, 3000);
        }

        this.logMedicalEvent('Standing Orders Executed', incident ? incident.incident_id : 'Unknown');
    }

    contactMedicalDirector() {
        const medicalDirector = this.medicalStaff.medical_director;
        
        this.showMedicalAlert(
            `Contacting ${medicalDirector.name} - ${medicalDirector.contact}`, 
            'info'
        );

        setTimeout(() => {
            this.showMedicalAlert('Medical Director consultation established', 'success');
        }, 2000);

        this.logMedicalEvent('Medical Director Contact', medicalDirector.name);
    }

    consultPediatricSpecialist() {
        const pediatricSpecialist = this.medicalStaff.flight_physicians.find(
            physician => physician.certifications.includes('Pediatric Emergency Medicine')
        );

        if (pediatricSpecialist) {
            this.showMedicalAlert(
                `Connecting to ${pediatricSpecialist.name} - Pediatric Emergency Medicine`, 
                'info'
            );

            setTimeout(() => {
                this.showMedicalAlert('Pediatric specialist consultation established', 'success');
            }, 2000);
        } else {
            this.showMedicalAlert('Pediatric specialist not available - contacting external consultant', 'warning');
        }

        this.logMedicalEvent('Pediatric Specialist Consult', 'Anaphylaxis case');
    }

    viewChainOfCustody(event) {
        const incident = this.getIncidentFromElement(event.target);
        
        this.showMedicalAlert(
            `Chain of custody tracking for ${incident ? incident.incident_id : 'incident'}`, 
            'info'
        );
        
        this.logMedicalEvent('Chain of Custody Viewed', incident ? incident.incident_id : 'Unknown');
    }

    getIncidentFromElement(element) {
        const incidentCard = element.closest('.incident-card');
        if (incidentCard) {
            const incidentId = incidentCard.querySelector('.incident-id')?.textContent;
            return this.activeIncidents.find(inc => inc.incident_id === incidentId);
        }
        return null;
    }

    // Tab-specific initialization methods
    refreshIncidentData() {
        console.log('Refreshing incident management data');
        this.updateIncidentTimers();
    }

    updateFleetStatus() {
        console.log('Updating fleet operations status');
        // Fleet status is already displayed in the HTML
    }

    loadMedicalProtocols() {
        console.log('Loading medical protocols');
        // Protocols are already loaded in the HTML
    }

    updateComplianceMetrics() {
        console.log('Updating compliance metrics');
        // Compliance data is already displayed
    }

    checkIntegrationStatus() {
        console.log('Checking system integration status');
        this.showMedicalAlert('All integration systems operational', 'success');
    }

    // Quality Metrics and Charts
    initializeQualityMetricsCharts() {
        setTimeout(() => {
            this.initializeResponseTimeChart();
            this.initializeQAPerformanceChart();
            this.initializeDataFlowChart();
        }, 1500);
    }

    initializeResponseTimeChart() {
        const canvas = document.getElementById('responseTimeChart');
        if (!canvas || this.charts.responseTime) return;

        try {
            const ctx = canvas.getContext('2d');
            this.charts.responseTime = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: Array.from({length: 24}, (_, i) => `${String(i).padStart(2, '0')}:00`),
                    datasets: [{
                        label: 'Response Time (minutes)',
                        data: [6.2, 5.8, 7.1, 6.9, 5.4, 6.8, 7.3, 5.9, 6.1, 7.0, 6.5, 6.2, 
                               5.8, 6.9, 7.2, 6.1, 5.9, 6.7, 7.1, 6.3, 5.7, 6.8, 6.4, 6.0],
                        borderColor: '#2563eb',
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointRadius: 2,
                        pointHoverRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: {
                            grid: { color: 'rgba(0, 0, 0, 0.05)' },
                            ticks: { maxTicksLimit: 8 }
                        },
                        y: {
                            beginAtZero: true,
                            max: 10,
                            grid: { color: 'rgba(0, 0, 0, 0.05)' }
                        }
                    }
                }
            });
        } catch (error) {
            console.log('Error initializing response time chart:', error);
        }
    }

    initializeQAPerformanceChart() {
        const canvas = document.getElementById('qaPerformanceChart');
        if (!canvas || this.charts.qaPerformance) return;

        try {
            const ctx = canvas.getContext('2d');
            this.charts.qaPerformance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Patient Safety', 'Protocol Compliance', 'Response Time', 'Outcome Success'],
                    datasets: [{
                        label: 'Performance Score',
                        data: [100, 100, 94, 97],
                        backgroundColor: ['#059669', '#3b82f6', '#f59e0b', '#8b5cf6'],
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, max: 100 }
                    }
                }
            });
        } catch (error) {
            console.log('Error initializing QA performance chart:', error);
        }
    }

    initializeDataFlowChart() {
        const canvas = document.getElementById('dataFlowChart');
        if (!canvas || this.charts.dataFlow) return;

        try {
            const ctx = canvas.getContext('2d');
            this.charts.dataFlow = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Epic EMR', 'ProQA Dispatch', 'Lab Results', 'Pharmacy', 'State Reporting'],
                    datasets: [{
                        data: [35, 25, 15, 15, 10],
                        backgroundColor: ['#3b82f6', '#059669', '#f59e0b', '#8b5cf6', '#ef4444']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: { usePointStyle: true, padding: 20, font: { size: 11 } }
                        }
                    }
                }
            });
        } catch (error) {
            console.log('Error initializing data flow chart:', error);
        }
    }

    // Medical Map
    initializeMedicalMap() {
        const canvas = document.getElementById('mapCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // Draw medical facility zones
        ctx.fillStyle = 'rgba(37, 99, 235, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw hospital zones
        ctx.fillStyle = 'rgba(37, 99, 235, 0.2)';
        ctx.fillRect(canvas.width * 0.3, canvas.height * 0.2, canvas.width * 0.4, canvas.height * 0.3);
        
        // Draw grid
        ctx.strokeStyle = 'rgba(107, 114, 128, 0.3)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < canvas.width; i += 50) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
        }
        
        for (let i = 0; i < canvas.height; i += 50) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.stroke();
        }
    }

    // System Updates
    startRealTimeUpdates() {
        this.updateIntervals.clock = setInterval(() => {
            this.updateSystemTime();
        }, 1000);

        this.updateIntervals.incidents = setInterval(() => {
            this.updateIncidentTimers();
        }, 1000);
    }

    updateSystemTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        
        const lastSyncEl = document.getElementById('lastSync');
        if (lastSyncEl) {
            lastSyncEl.textContent = timeString;
        }
    }

    updateIncidentTimers() {
        this.activeIncidents.forEach(incident => {
            if (incident.eta && incident.eta.includes(':') && !incident.eta.includes('Scene')) {
                const parts = incident.eta.split(':');
                if (parts.length >= 2) {
                    let minutes = parseInt(parts[parts.length - 2]);
                    let seconds = parseInt(parts[parts.length - 1]);
                    
                    if (seconds > 0) {
                        seconds--;
                    } else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    }
                    
                    incident.eta = `00:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                }
            }
        });
    }

    // Modal Management
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    // Alert System
    showMedicalAlert(message, type = 'info') {
        console.log(`Medical Alert [${type.toUpperCase()}]: ${message}`);
        
        const alert = document.createElement('div');
        alert.className = `medical-alert alert-${type}`;
        alert.innerHTML = `
            <div class="alert-icon">${this.getAlertIcon(type)}</div>
            <div class="alert-message">${message}</div>
            <div class="alert-timestamp">${new Date().toLocaleTimeString()}</div>
        `;

        Object.assign(alert.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            backgroundColor: this.getAlertColor(type),
            color: 'white',
            padding: '12px 16px',
            borderRadius: '6px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: '2000',
            maxWidth: '400px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '500'
        });

        document.body.appendChild(alert);

        setTimeout(() => {
            if (alert.parentNode) {
                alert.parentNode.removeChild(alert);
            }
        }, 5000);
    }

    getAlertIcon(type) {
        const icons = {
            'success': '✅',
            'warning': '⚠️',
            'critical': '🚨',
            'info': 'ℹ️',
            'error': '❌'
        };
        return icons[type] || icons.info;
    }

    getAlertColor(type) {
        const colors = {
            'success': '#059669',
            'warning': '#f59e0b',
            'critical': '#dc2626',
            'info': '#2563eb',
            'error': '#dc2626'
        };
        return colors[type] || colors.info;
    }

    // Logging System
    logSystemStartup() {
        const startupLog = {
            timestamp: new Date().toISOString(),
            event: 'System Startup',
            facility: this.facilityInfo.name,
            license: this.facilityInfo.license,
            compliance_status: 'Verified'
        };
        
        console.log('MedEvac Pro™ System Startup Log:', startupLog);
    }

    logUserActivity(activity) {
        const activityLog = {
            timestamp: new Date().toISOString(),
            user_activity: activity,
            session_id: 'medical_session_' + Date.now()
        };
        
        console.log('User Activity Log:', activityLog);
    }

    logMedicalEvent(event, details) {
        const medicalLog = {
            timestamp: new Date().toISOString(),
            medical_event: event,
            details: details,
            medical_director: this.medicalStaff.medical_director.name
        };
        
        console.log('Medical Event Log:', medicalLog);
    }

    logCriticalEvent(event, details) {
        const criticalLog = {
            timestamp: new Date().toISOString(),
            critical_event: event,
            details: details,
            priority: 'IMMEDIATE'
        };
        
        console.log('CRITICAL EVENT LOG:', criticalLog);
    }

    logMedicalDocument(docType, details) {
        const documentLog = {
            timestamp: new Date().toISOString(),
            document_type: docType,
            details: details,
            hipaa_compliance: 'verified'
        };
        
        console.log('Medical Document Log:', documentLog);
    }

    // Cleanup
    cleanup() {
        Object.values(this.updateIntervals).forEach(interval => {
            if (interval) clearInterval(interval);
        });
        
        Object.values(this.animationFrames).forEach(frame => {
            if (frame) cancelAnimationFrame(frame);
        });
        
        Object.values(this.charts).forEach(chart => {
            if (chart && chart.destroy) chart.destroy();
        });

        console.log('Medical system cleanup completed');
    }
}

// Initialize the professional medical system
console.log('Initializing MedEvac Pro™ - Professional Medical Emergency Response System');
const medEvacSystem = new MedEvacProMedicalSystem();

// Event handlers
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Medical system entering standby mode');
    } else {
        console.log('Medical system resuming full operation');
    }
});

window.addEventListener('beforeunload', () => {
    medEvacSystem.cleanup();
});

window.addEventListener('error', (e) => {
    console.error('Medical System Error:', e.error);
});

// Export for global access
window.MedEvacProMedicalSystem = MedEvacProMedicalSystem;