---
publish: true
title: 
aliases:
---
## See Also
### Tweens
[[tweens in Godot]] Allows for smooth interpolation of properties over time
### Physics-based Animation
Godot's physics engine can be used for animation:
- **RigidBody**: For physics-based animations and interactions.
- **Skeleton IK**: For inverse kinematics in 3D animations.
### Particle Systems
For animating large numbers of small elements:
- **GPUParticles2D/3D**: For creating particle effects in 2D and 3D.
- **CPUParticles2D/3D**: CPU-based alternative to GPU particles.
### Shader-based Animation
Custom shaders can be used for complex visual animations:
- **ShaderMaterial**: Allows for creating custom shader-based animations.
### Visual Shader Animations
- **VisualShader**: Allows for creating shader-based animations without writing code.
### Root Motion
For 3D character animations:
- Root motion techniques can be used with AnimationTree for precise character movement.
--- 
## The Animation System

The core animation system in Godot includes:

- **AnimationPlayer**: The primary node for creating and managing keyframe animations.
- **Animation Tracks**: Components within AnimationPlayer that define specific properties being animated over time.
- **AnimationTree**: An advanced node for complex animation blending and state management, working in conjunction with AnimationPlayer.
