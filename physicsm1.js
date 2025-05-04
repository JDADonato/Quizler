let questionBank = [
    {
        question: "Which of the following is a scalar quantity?",
        options: ["Velocity", "Acceleration", "Distance", "Displacement"],
        correctAnswer: 2,
        explanation: "Scalars only have magnitude. Distance is a scalar."
    },
    {
        question: "What is a vector quantity?",
        options: ["Time", "Temperature", "Speed", "Displacement"],
        correctAnswer: 3,
        explanation: "Displacement has both magnitude and direction."
    },
    {
        question: "Which quantity is NOT a vector?",
        options: ["Velocity", "Force", "Pressure", "Momentum"],
        correctAnswer: 2,
        explanation: "Pressure is a scalar quantity."
    },
    {
        question: "Scalars can be combined using:",
        options: ["Vector addition", "Scalar multiplication", "Ordinary arithmetic", "Cross product"],
        correctAnswer: 2,
        explanation: "Scalars use normal arithmetic."
    },
    {
        question: "Which of the following is a scalar?",
        options: ["Torque", "Force", "Mass", "Electric field"],
        correctAnswer: 2,
        explanation: "Mass is a scalar quantity."
    },
    {
        question: "What does a vector have?",
        options: ["Only magnitude", "Only direction", "Magnitude and direction", "No units"],
        correctAnswer: 2,
        explanation: "Vectors have both magnitude and direction."
    },
    {
        question: "The length of a vector arrow represents its:",
        options: ["Direction", "Component", "Magnitude", "Unit"],
        correctAnswer: 2,
        explanation: "Arrow length shows magnitude."
    },
    {
        question: "Two vectors with the same magnitude and direction are:",
        options: ["Opposite", "Unequal", "Equal", "Parallel only"],
        correctAnswer: 2,
        explanation: "Same magnitude and direction = equal."
    },
    {
        question: "Vectors pointing in opposite directions are:",
        options: ["Parallel", "Equal", "Anti-parallel", "Unit vectors"],
        correctAnswer: 2,
        explanation: "Opposite direction = anti-parallel."
    },
    {
        question: "A vector with magnitude of 1 is called a:",
        options: ["Component", "Scalar", "Unit vector", "Base vector"],
        correctAnswer: 2,
        explanation: "Unit vector = magnitude 1."
    },
    {
        question: "What is the unit vector along the x-axis?",
        options: ["j", "k", "i", "l"],
        correctAnswer: 2,
        explanation: "i = (1,0,0)"
    },
    {
        question: "What is the unit vector along the z-axis?",
        options: ["i", "j", "k", "z"],
        correctAnswer: 2,
        explanation: "k = (0,0,1)"
    },
    {
        question: "The unit vector for y-axis is:",
        options: ["i", "j", "k", "l"],
        correctAnswer: 1,
        explanation: "j = (0,1,0)"
    },
    {
        question: "Which notation represents a vector in 2D?",
        options: ["A = Ai + Aj", "A = Axi + Ayj", "A = Ak + Aj", "A = Ai + Ajk"],
        correctAnswer: 1,
        explanation: "Axi + Ayj is 2D form."
    },
    {
        question: "What is the 3D form of a vector A?",
        options: ["Ai + Aj", "Ai + Aj + Ak", "Ax + Ay", "Aj + Ak"],
        correctAnswer: 1,
        explanation: "3D uses i, j, k components."
    },
    {
        question: "What is the magnitude of vector A = <3, 4>?",
        options: ["5", "6", "7", "2"],
        correctAnswer: 0,
        explanation: "√(3² + 4²) = 5"
    },
    {
        question: "What is the magnitude of vector A = <0, 0, 9>?",
        options: ["0", "3", "81", "9"],
        correctAnswer: 3,
        explanation: "√(9²) = 9"
    },
    {
        question: "The formula for the magnitude of a 3D vector is:",
        options: ["√(Ax² + Ay²)", "√(Ax² + Ay² + Az²)", "Ax + Ay + Az", "Ax² + Ay² + Az²"],
        correctAnswer: 1,
        explanation: "3D vectors include 3 components."
    },
    {
        question: "The direction of a vector in 2D uses which formula?",
        options: ["sin⁻¹(Ax/Ay)", "cos⁻¹(Ax/Ay)", "tan⁻¹(Ay/Ax)", "tan⁻¹(Ax/Ay)"],
        correctAnswer: 2,
        explanation: "Direction = tan⁻¹(y/x)"
    },
    {
        question: "What is the angle of vector <5, 0>?",
        options: ["90°", "45°", "0°", "180°"],
        correctAnswer: 2,
        explanation: "It lies along the x-axis."
    },
    {
        question: "What is the unit vector of F = <3, 4>?",
        options: ["<0.6, 0.8>", "<1, 0>", "<3, 4>", "<0.3, 0.4>"],
        correctAnswer: 0,
        explanation: "Divide each component by magnitude 5."
    },
    {
        question: "If vector V = i + 2j - k, how many components does it have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        explanation: "i, j, k = 3 components."
    },
    {
        question: "A vector can be represented by:",
        options: ["A single point", "A line only", "An arrow", "A dot"],
        correctAnswer: 2,
        explanation: "Vectors are shown as arrows."
    },
    {
        question: "A vector and its unit vector always:",
        options: ["Have the same magnitude", "Point in opposite directions", "Point in the same direction", "Are perpendicular"],
        correctAnswer: 2,
        explanation: "Unit vector keeps direction."
    },
    {
        question: "If a vector is <6, -8>, its magnitude is:",
        options: ["14", "10", "12", "8"],
        correctAnswer: 1,
        explanation: "√(6² + 8²) = 10"
    },
    {
        question: "The component form of vector A = 3i - 4j is:",
        options: ["<3, -4>", "<3, 4>", "<4, 3>", "<-4, 3>"],
        correctAnswer: 0,
        explanation: "i = x, j = y."
    },
    {
        question: "Which is a correct unit vector?",
        options: ["<2, 0>", "<1, 1>", "<0.707, 0.707>", "<3, 4>"],
        correctAnswer: 2,
        explanation: "√(0.707² + 0.707²) ≈ 1"
    },
    {
        question: "What is the purpose of a unit vector?",
        options: ["Adds magnitude", "Adds direction", "Describes direction only", "Removes magnitude"],
        correctAnswer: 2,
        explanation: "Unit vector = pure direction."
    },
    {
        question: "If two vectors are parallel, their directions are:",
        options: ["Different", "Opposite", "Same", "Perpendicular"],
        correctAnswer: 2,
        explanation: "Parallel = same direction."
    },
    {
        question: "Given A = 5i + 12j, magnitude is:",
        options: ["17", "12", "13", "5"],
        correctAnswer: 2,
        explanation: "√(5² + 12²) = 13"
    },
        {
        question: "Which of these is not a property of a vector?",
        options: ["Has magnitude", "Has direction", "Can be negative", "Has mass"],
        correctAnswer: 3,
        explanation: "Vectors do not have mass; mass is a scalar."
    },
    {
        question: "Which is the correct vector notation?",
        options: ["(i, j)", "[i + j]", "<i + j>", "i + j"],
        correctAnswer: 3,
        explanation: "Vectors are commonly written as i + j."
    },
    {
        question: "What is the opposite of vector A = 2i - 3j?",
        options: ["-2i - 3j", "2i + 3j", "-2i + 3j", "-2i + 3j"],
        correctAnswer: 2,
        explanation: "Multiply each component by -1."
    },
    {
        question: "Which operation changes the direction of a vector?",
        options: ["Adding a scalar", "Multiplying by -1", "Taking magnitude", "Taking components"],
        correctAnswer: 1,
        explanation: "Multiplying by -1 reverses the direction."
    },
    {
        question: "If A = 4i and B = -4i, then A + B =",
        options: ["8i", "0", "4i", "-8i"],
        correctAnswer: 1,
        explanation: "4i + (-4i) = 0"
    },
    {
        question: "Which vector has only x-direction component?",
        options: ["i", "j", "k", "-j"],
        correctAnswer: 0,
        explanation: "i = x-axis unit vector"
    },
    {
        question: "Which vector lies in the y-direction?",
        options: ["i", "j", "k", "i + j"],
        correctAnswer: 1,
        explanation: "j is along the y-axis."
    },
    {
        question: "Which represents a 3D vector?",
        options: ["i + j", "2i + 3j", "4i - 2j + k", "k"],
        correctAnswer: 2,
        explanation: "Includes i, j, and k (x, y, z)."
    },
    {
        question: "A vector with magnitude zero is called:",
        options: ["Negative vector", "Resultant vector", "Zero vector", "Neutral vector"],
        correctAnswer: 2,
        explanation: "Zero magnitude = zero vector."
    },
    {
        question: "What is the unit of displacement?",
        options: ["m", "m/s", "m²", "kg"],
        correctAnswer: 0,
        explanation: "Displacement is measured in meters (m)."
    },
    {
        question: "Velocity is the rate of change of:",
        options: ["Speed", "Time", "Distance", "Displacement"],
        correctAnswer: 3,
        explanation: "Velocity is change in displacement over time."
    },
    {
        question: "Which of these vectors has the largest magnitude?",
        options: ["<3, 4>", "<6, 8>", "<5, 12>", "<8, 15>"],
        correctAnswer: 3,
        explanation: "√(8² + 15²) = 17, the largest."
    },
    {
        question: "Which quantity is directionless?",
        options: ["Displacement", "Acceleration", "Mass", "Velocity"],
        correctAnswer: 2,
        explanation: "Mass is a scalar, has no direction."
    },
    {
        question: "If vector A = <0, 3> and B = <4, 0>, their sum is:",
        options: ["<4, 3>", "<3, 4>", "<0, 7>", "<7, 0>"],
        correctAnswer: 0,
        explanation: "<0+4, 3+0> = <4, 3>"
    },
    {
        question: "The vector <1, 1> makes what angle with x-axis?",
        options: ["30°", "60°", "45°", "90°"],
        correctAnswer: 2,
        explanation: "tan⁻¹(1/1) = 45°"
    },
    {
        question: "What is the unit vector of <8, 6>?",
        options: ["<0.8, 0.6>", "<0.6, 0.8>", "<8, 6>", "<1, 0>"],
        correctAnswer: 1,
        explanation: "Magnitude = 10; <8/10, 6/10> = <0.8, 0.6>"
    },
    {
        question: "Direction of <0, -5> vector is:",
        options: ["0°", "180°", "270°", "90°"],
        correctAnswer: 2,
        explanation: "Points down along negative y-axis."
    },
    {
        question: "The angle of vector <1, √3> is:",
        options: ["30°", "45°", "60°", "90°"],
        correctAnswer: 2,
        explanation: "tan⁻¹(√3/1) = 60°"
    },
    {
        question: "What is the magnitude of A = 2i - 2j - k?",
        options: ["3", "4", "√9", "√11"],
        correctAnswer: 3,
        explanation: "√(2² + (-2)² + (-1)²) = √9 = 3"
    },
    {
        question: "Unit vector of <0, 0, 7> is:",
        options: ["<0, 0, 1>", "<0, 1, 0>", "<1, 0, 0>", "<0, 0, 7>"],
        correctAnswer: 0,
        explanation: "7/7 = 1, so <0, 0, 1>"
    }
];
