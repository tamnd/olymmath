---
tag: W7HY02XY3Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243606
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In Tlaxcala, there is a transportation system that works through buses that travel from one city to another in one direction . A set $S$ of cities is said *beautiful* if it contains at least three different cities and from each city $A$ in $S$ at least two buses depart, each one goes directly to a different city in $S$ and none of them is $A$ (if there is a direct bus from $A$ to a city $B$ in $S$, there is not necessarily a direct bus from $B$ to $A$). Show that if there exists a beautiful set of cities $S$, then there exists a beautiful $T$ subset of $S$, such that for any two cities in $T$, you can get from one to another by taking buses that only pass through cities in $T$.

Note: A bus goes directly from one city to another if it does not pass through any other city.
