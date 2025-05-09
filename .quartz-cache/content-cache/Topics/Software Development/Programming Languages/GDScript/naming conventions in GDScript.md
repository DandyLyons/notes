---
publish: true
---

## Primitive Types
- **Style:** Lowercase  
- **Examples:** `int`, `float`, `bool`, `string`  
- Built-in primitive types are always written in lowercase.

## Classes
- **Style:** PascalCase  
- **Examples:** `Node`, `Sprite`, `KinematicBody`  
- Custom classes also use PascalCase: `PlayerCharacter`, `EnemySpawner`.  

### Class Names
- Declared with the `class_name` keyword in PascalCase.  
  **Example:**  
  ```gdscript
  class_name PlayerController
  ```

## Variables
- **Style:** snake_case  
- **Examples:** `player_health`, `enemy_count`, `movement_speed`  

### Private Variables
- Prefix with an underscore to indicate internal use: `_internal_data`.  
  **Example:**  
  ```gdscript
  var _internal_data = 42
  ```

### @onready Variables
- Use snake_case with the `@onready` annotation.  
  **Example:**  
  ```gdscript
  @onready var sprite_node = $Sprite
  ```

### Export Variables
- Use snake_case, optionally with categories.  
  **Examples:**  
  ```gdscript
  export var move_speed = 5.0
  export(int, "Idle", "Run", "Attack") var current_state
  ```

## Constants
- **Style:** UPPER_SNAKE_CASE  
- **Examples:** `MAX_SPEED`, `GRAVITY`, `PI`  
- Defined with the `const` keyword.

## Functions
- **Style:** snake_case  
- **Examples:** `move_player()`, `calculate_score()`, `spawn_enemy()`  

### Built-in Callback Functions
- Prefix with an underscore: `_ready()`, `_process()`.  

### Setters and Getters
- Use `set_` and `get_` prefixes.  
  **Examples:** `set_health()`, `get_health()`

## Signals
- **Style:** snake_case  
- **Examples:** `health_depleted`, `score_changed`, `enemy_spawned`

## Enums
- **Style:** PascalCase for the enum name, UPPER_SNAKE_CASE for values.  
  **Example:**  
  ```gdscript
  enum Direction { UP, DOWN, LEFT, RIGHT }
  ```

## File Names
- **Style:** snake_case  
- **Examples:** `player_controller.gd`, `main_menu.tscn`  
- For named classes, convert PascalCase to snake_case.  
  **Example:**  
  ```gdscript
  class_name YAMLParser  # File: yaml_parser.gd
  ```

## Node Names (Scene Tree)
- **Style:** PascalCase  
- **Examples:** `PlayerSprite`, `EnemyContainer`, `UIPanel`

## Acronyms in Names
- Treat acronyms as words.  
  **Classes/Types:** `HttpRequest` (not `HTTPRequest`)  
  **Variables/Functions:** `json_data` (not `JSON_data`)

## Boolean Variables
- Begin with `is_`, `has_`, or `can_` to improve clarity.  
  **Examples:** `is_active`, `has_ammo`, `can_jump`

