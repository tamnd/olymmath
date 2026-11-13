---
tag: 2K1DADCHN5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h130902
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32880
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231927
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2007
    source: hf-ai-mo-aops
    label: 2007 Olympic Revenge
---
Let $A_{1}A_{2}B_{1}B_{2}$ be a convex quadrilateral. At adjacent vertices $A_{1}$ and $A_{2}$ there are two Argentinian cities. At adjacent vertices $B_{1}$ and $B_{2}$ there are two Brazilian cities. There are $a$ Argentinian cities and $b$ Brazilian cities in the quadrilateral interior, no three of which collinear. Determine if it's possible, independently from the cities position, to build straight roads, each of which connects two Argentinian cities ou two Brazilian cities, such that:

$\bullet$ Two roads does not intersect in a point which is not a city;
$\bullet$ It's possible to reach any Argentinian city from any Argentinian city using the roads; and
$\bullet$ It's possible to reach any Brazilian city from any Brazilian city using the roads.

If it's always possible, construct an algorithm that builds a possible set of roads.
