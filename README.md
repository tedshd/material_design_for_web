material_design_for_web
=======================


### Intro

Use CSS3 achieve a part of material design

### <strong style="color:red">Notice</strong>

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
* jQuery is not necessary

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

```html
<!-- password type -->
<div class="material-input-group">
    <input type="password">
    <label class="material-design-label" for="">PassWord</label>
</div>
```

```html
<!-- textarea -->
<div class="material-input-group">
    <textarea rows="4" cols="50"></textarea>
    <label class="material-design-label" for="">textarea</label>
</div>
```

#### button

Default HTML tag `button` & `a` have material design effect

If want to change

Modify code

```javascrip
if (target.tagName.toLowerCase() !== 'button' && target.tagName.toLowerCase() !== 'a') return false;
```

#### checkbox

```html
<div class="material-design-checkbox">
    <input id="checkbox" type="checkbox">
    <span class="check">
        <span class="ripple"></span>
    </span>
    <label for="checkbox">checkbox</label>
</div>
```

#### radio

```html
<div class="material-design-radio">
    <input id="radio_2" type="radio" name="radio">
    <span class="check">
        <span class="ripple"></span>
    </span>
    <label for="radio_2">radio_2</label>
</div>
```

#### switch

```html
<div class="material-design-switch">
    <label for="switch">switch</label>
    <input id="switch" type="checkbox">
    <span class="check">
        <span class="ripple"></span>
    </span>
</div>
```