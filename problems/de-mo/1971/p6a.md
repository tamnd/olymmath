---
tag: VZE130NMZ9
kind: problem
appearances:
  - at: de-mo/1971/p6a
    primary: true
canonical:
  statement: S1
  rule: curated
statements:
  - id: S1
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 10. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/10124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
    extraction: native/pdftohtml (om-demo/1)
    confidence: 0.9
status:
  statement: captured
---
Definition: Eine Menge $M$ von Elementen $u, v, w, \ldots$ heißt genau dann eine Gruppe, bezüglich der algebraischen Operation $A$, wenn die folgenden drei Bedingungen erfüllt sind:

a) Jedem geordneten Paar $[u,v]$ von Elementen aus $M$ ist vermöge der Operation $A$ ein Element $w$ aus $M$ zugeordnet (man schreibt $u \circ v = w$).

b) Die algebraische Operation $A$ ist assoziativ, d.h., für alle Elemente $u, v, w$ aus $M$ gilt: $(u \circ v) \circ w=$

$$u\circ (v \circ w).$$

c) Zu je zwei Elementen $u$ und $v$ aus $M$ existiert mindestens ein Element $x$ aus $M$, so daß $u\circ x = v$ gilt, und mindestens ein Element $y$ aus $M$, so daß $y \circ u = v$ gilt.

Es sei nun $P$ die Menge aller Polynome ersten Grades $f(x) = a_0 + a_1x$, wobei $a_0, a_1$ rationale Zahlen sind und $a_1 \ne 0$ gilt.

Ferner sei in $P$ eine algebraische Operation $A$ wie folgt definiert: Sind $f(x)$ und $g(x)$ Polynome aus $P$, so ist $f(x) \circ g(x) = g[f(x)]$.

Es ist zu entscheiden, ob $P$ eine Gruppe bezüglich $A$ ist.
