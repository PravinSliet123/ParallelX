// PoseAnalysis.js
import React, { useRef, useState } from 'react';
import * as posenet from '@tensorflow-models/posenet';
import '@tensorflow/tfjs';
import { useEffect } from 'react';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import '@tensorflow/tfjs-core';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import '@mediapipe/face_mesh';
import { max } from '@tensorflow/tfjs-core';
const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
const detectorConfig = {
  runtime: 'mediapipe', // or 'tfjs'
  solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
}
const detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
const PoseAnalysis = () => {
  const imageRef = useRef(null);
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [keypoints, setKeyPOints] = useState(null)
  const [facepoints, setFacePoints] = useState([])
  const [centerX, setcenterX] = useState(0)
  const [centerY, setcenterY] = useState(0)
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };
  const runPoseNet = async () => {
    try {
      console.log('facesAnalysis: ');
      const image = imageRef.current;
      const faces = await detector.estimateFaces(image);
      console.log('faces: ', faces);
      setFacePoints(faces?.[0].keypoints)
    } catch (error) {
      console.log('error: ', error);

    }
    try {

      const net = await posenet.load();
      console.log('handleAnalyzeClick: ');
      const image = imageRef.current;

      // Use the loaded image for pose estimation
      const pose = await net.estimateSinglePose(image, {
        flipHorizontal: false,
      });

      // Calculate angles or perform other analysis based on pose data
      // You can access pose keypoint data, which contains information about different body parts
      console.log(pose);
      const newKeypoints = pose.keypoints.map(item => (
        {
          [item?.part]: item.position
        }
      ))
      const object = Object.assign({}, ...newKeypoints);
      if (object) {
        console.log('Keypoints: ', object);
        setKeyPOints(object)
      }
    } catch (error) {

    }

  };

  const handleAnalyzeClick = () => {

    runPoseNet();
  };



  useEffect(() => {
    if (keypoints) {
      console.log('keypointssss: ', keypoints);
      // const angles = calcAngles([
      //   [keypoints["leftShoulder"], keypoints["leftElbow"], keypoints["leftShoulder"], keypoints["leftHip"]],
      //   [keypoints["leftWrist"], keypoints["leftElbow"], keypoints["leftElbow"], keypoints["leftShoulder"]],
      //   [keypoints["leftKnee"], keypoints["leftHip"], keypoints["leftAnkle"], keypoints["leftKnee"]],
      // ])
      const angles = calcAngles([
        [keypoints["rightShoulder"], keypoints["rightElbow"], keypoints["rightShoulder"], keypoints["rightHip"]],
        [keypoints["rightWrist"], keypoints["rightElbow"], keypoints["rightElbow"], keypoints["rightShoulder"]],
        [keypoints["rightKnee"], keypoints["rightHip"], keypoints["rightAnkle"], keypoints["rightKnee"]]
      ])
      console.log('angles: ', angles);
    }
  }, [keypoints])
  function calcAngles(combos) {
    // [keypoints[leftWrist], keypoints[leftElbow], keypoints[leftElbow], keypoints[leftShoulder]],
    // [keypoints[leftWrist], keypoints[leftElbow], keypoints[leftElbow], keypoints[leftShoulder]],
    console.log('combo: ', combos);
    let angles = [];
    combos.forEach(combo => {
      // y-axis is positive downward
      let v1x = combo[1].x - combo[0].x;
      let v1y = -(combo[1].y - combo[0].y);
      let v2x = combo[3].x - combo[2].x;
      let v2y = -(combo[3].y - combo[2].y);
      let angle1 = Math.atan2(v1y, v1x) * 180 / Math.PI
      let angle2 = Math.atan2(v2y, v2x) * 180 / Math.PI
      if (angle1 < 0) angle1 = angle1 + 360
      if (angle2 < 0) angle2 = angle2 + 360
      console.log('angle1', angle1, 'angle2', angle2)
      let angle = angle2 - angle1
      if (angle < -180) angle = angle + 360
      if (angle > 180) angle = angle - 360
      angle = Math.round(angle * 10) / 10
      console.log('finalangle: ', angle);
      angles.push(angle.toString());
    });
    return angles;
  }
  let maxx = -1
  let ind = 0;
  let centerptY;
  let centerptx
  useEffect(() => {
    maxYval()
  }, [facepoints])
  const maxYval = (item, index) => {
    const leftpt = {}
    console.log('facepoints: ', facepoints);

    facepoints?.forEach(item => {
      if (item?.name === "leftEye") {
        leftpt.x = item.x
        leftpt.y = item.y;
        return
      }
    })
    let rightpt = {}
    facepoints?.forEach(item => {
      if (item?.name === "rightEye") {
        rightpt.x = item.x
        rightpt.y = item.y;
        return
      }
    })
    console.log('rightEye: ', rightpt);

    centerptx = (leftpt.x + rightpt.x) / 2
    centerptY = (rightpt.x + rightpt.x) / 2
    setcenterX(centerptx)
    setcenterY(centerptY)

  }
  console.log('centerptx: ', centerX);
  console.log('centerptY: ', centerY);
  console.log('maxx: ', maxx, ind);


  const calculateinclination = ()=>{
  


if (nose && leftShoulder && rightShoulder) {
  // Calculate the vectors representing the shoulders and nose
  const vector1 = {
    x: rightShoulder.position.x - leftShoulder.position.x,
    y: rightShoulder.position.y - leftShoulder.position.y,
  };
  const vector2 = {
    x: nose.position.x - leftShoulder.position.x,
    y: nose.position.y - leftShoulder.position.y,
  };

  // Calculate the dot product of the two vectors
  const dotProduct = vector1.x * vector2.x + vector1.y * vector2.y;

  // Calculate the magnitudes of the vectors
  const magnitude1 = Math.sqrt(vector1.x ** 2 + vector1.y ** 2);
  const magnitude2 = Math.sqrt(vector2.x ** 2 + vector2.y ** 2);

  // Calculate the cosine of the angle between the vectors
  const cosAngle = dotProduct / (magnitude1 * magnitude2);

  // Calculate the angle in radians
  const angleRadians = Math.acos(cosAngle);

  // Convert the angle to degrees
  const angleDegrees = (angleRadians * 180) / Math.PI;

  console.log('Inclination Angle:', angleDegrees);
} else {
  console.error('Missing keypoints for inclination calculation');
}

  }
  return (
    <div >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <button onClick={() => {
        handleAnalyzeClick()
      }} disabled={!imageUrl}>
        Analyze Pose
      </button>
      <div className='imageBody'>
        {imageUrl && (
          <img
            ref={imageRef}
            src={imageUrl}
            alt="Uploaded"
            style={{ maxWidth: '100%', marginTop: '20px' }}
          />
        )}
        {
          facepoints?.filter(item => item?.name === "rightEye" || item?.name === "leftEye")?.map((item, index) => {
            return (
              <div style={{
                height: "10px",
                width: "10px",
                backgroundColor: "blue",
                borderRadius: "50%",
                position: "absolute",
                left: `${centerX}px`,
                top: `${centerY}px`
              }}>

              </div>
            )
          })
        }
      </div>
      <p>{maxx}</p>
    </div>
  );
};

export default PoseAnalysis;
