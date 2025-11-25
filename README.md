# stringcomp

A utility library for enhanced string comparison in JavaScript and TypeScript. This library extends the native String prototype with comparison methods that support strings, numbers, and dates.

## Features

- Extends JavaScript's `String` prototype with comparison methods
- Supports multiple data types:
  - String comparison
  - Numeric comparison (when strings represent numbers)
  - Date comparison (when strings represent valid dates)
- Type-safe for TypeScript projects
- Zero external dependencies
- Lightweight and performant

## Installation

```bash
npm install compare-str
```

## Usage

### Basic String Comparison

```javascript
import 'compare-str';

console.log('apple'.lessThan('banana'));    // true
console.log('zebra'.greaterThan('apple'));  // true
console.log('hello'.equal('hello'));        // true
console.log('world'.equal('hello'));        // false
```

### Numeric String Comparison

When both strings can be parsed as numbers, the comparison is performed numerically:

```javascript
console.log('10'.lessThan('20'));           // true (numeric comparison)
console.log('100'.greaterThan('50'));       // true (numeric comparison)
console.log('42'.equal('42'));              // true (numeric comparison)
console.log('10'.lessThan('2'));            // false (10 > 2 numerically)
```

### Date String Comparison

When both strings can be parsed as dates, the comparison is performed chronologically:

```javascript
console.log('2020-01-01'.lessThan('2021-01-01'));           // true
console.log('2023-12-31'.greaterThan('2023-01-01'));        // true
console.log('2024-01-15'.equal('2024-01-15'));              // true
console.log('2024-01-15T10:30:00'.greaterThan('2024-01-15T09:00:00')); // true
```

## API Reference

All methods are available on any string instance:

### `lessThan(value: string): boolean`

Returns `true` if the string is less than the provided value, `false` otherwise.

**Parameters:**
- `value`: The string to compare against

**Returns:**
- `boolean`: Result of the comparison

**Throws:**
- Error if the argument count is not exactly 1
- Error if the argument is not a string

**Example:**
```javascript
'abc'.lessThan('xyz');  // true
```

### `greaterThan(value: string): boolean`

Returns `true` if the string is greater than the provided value, `false` otherwise.

**Parameters:**
- `value`: The string to compare against

**Returns:**
- `boolean`: Result of the comparison

**Throws:**
- Error if the argument count is not exactly 1
- Error if the argument is not a string

**Example:**
```javascript
'xyz'.greaterThan('abc');  // true
```

### `equal(value: string): boolean`

Returns `true` if the string is equal to the provided value, `false` otherwise.

**Parameters:**
- `value`: The string to compare against

**Returns:**
- `boolean`: Result of the comparison

**Throws:**
- Error if the argument count is not exactly 1
- Error if the argument is not a string

**Example:**
```javascript
'hello'.equal('hello');  // true
```

## Comparison Logic

The library uses smart comparison logic based on the type of data:

1. **Numeric comparison**: If both strings can be parsed as valid numbers, numeric comparison is used
2. **Date comparison**: If both strings can be parsed as valid dates, chronological comparison is used
3. **String comparison**: Otherwise, lexicographic string comparison is used

### Examples of comparison types:

```javascript
// Numeric
'10'.lessThan('20');     // true (10 < 20)
'100'.greaterThan('99'); // true (100 > 99)

// Date
'2024-01-01'.lessThan('2024-12-31');     // true
'2023-06-15T10:00:00Z'.greaterThan('2023-01-01'); // true

// Lexicographic
'apple'.lessThan('banana');     // true
'zebra'.greaterThan('apple');   // true
```

## TypeScript Support

This library is fully TypeScript compatible. The extended String interface is automatically available:

```typescript
import 'stringcomp';

const result: boolean = '10'.lessThan('20');  // TypeScript knows this returns boolean
```

## Build

To build the library from source:

```bash
npm run build
```

This will generate the distribution files in the `dist` directory.

## License

MIT

## Repository

[https://github.com/alancj731/stringcomp.git](https://github.com/alancj731/stringcomp.git)
