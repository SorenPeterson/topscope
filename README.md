# Top Scope

---

Top scope was created to help create global variables while conforming to es6. It automatically sets the value of topScope to be either `global` or `window` depending on whether it is running in the server or client, respectively.

1. Features
2. Installation
3. Examples

## 1. Features

Top Scope is very simple to use. To make a variable accessible globally, put in the <code>topScope</code> object. Examples below.

## 2. Installation

Installation is pretty simple

<code>meteor add soren468:topscope</code>

## 3. Examples

Put a variable (<code>Projects</code>) into the global scope.

<code>
topScope.Projects = new Mongo.Collection('projects');
</code>
