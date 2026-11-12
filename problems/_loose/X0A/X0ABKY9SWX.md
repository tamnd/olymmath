---
tag: X0ABKY9SWX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Bulgarian Spring Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h3538194
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-spring/2025
    source: hf-ai-mo-aops
    label: 2025 Bulgarian Spring Mathematical Competition
---
The evil sorceress Morgana lives in a square-shaped palace divided into a $101 \times 101$ grid of rooms, each initially at a temperature of $20^\circ$C. Merlin attempts to freeze Morgana by casting a spell that permanently sets the central cell's temperature to $0^\circ$C.

At each subsequent nanosecond, the following steps occur in order:
1. For every cell except the central one, the new temperature is computed as the arithmetic mean of the temperatures of its adjacent cells (those sharing a side).
2. All new temperatures (except the central cell) are updated simultaneously to the calculated values.

Morgana can freely move between rooms but will freeze if all room temperatures drop below $10^{-2025}$ degrees. The ice spell lasts for $10^{75}$ nanoseconds, after which temperatures revert to their initial values.

Will Merlin succeed in freezing Morgana?
