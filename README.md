material_design_for_web
=======================


### Intro

Use CSS3 achieve a part of material design

### Notice

Now scss support [compass 1.0.1](http://compass-style.org/install/)
Modify `transform` in scss

### Demo

[Demo](http://tedshd.github.io/material_design_for_web/)

### Feature

* Base on JavaScript & Sass & compass
* Use CSS3
* Form input focus effect
* button & a click effect

### Support

* IE 10+
* jQuery is not necessary(form has jquery ver)

### Usage

#### Form

HTML

```html

<!-- basic -->
<div class="input-group">
    <input type="text">
    <label class="material-design-label" for="">PassWord</label>
</div>
```

Can add error style

```html

<!-- error style -->
<div class="input-group input-error">
    <input type="text">
    <label class="material-design-label" for="">E-mail</label>
</div>
```

#### button

Default HTML tag `button` & `a` have material design effect

If want to change

Modify file `material_design_button.js`

```javascrip
if (target.tagName.toLowerCase() !== 'button' && target.tagName.toLowerCase() !== 'a') return false;
```
