---
tag: F08RE5W5NG
kind: problem
appearances:
  - at: pumac/2025/ca2
    primary: true
  - at: pumac/2025/cb4
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Combinatorics_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
You find yourself standing at vertex $A$ in the triangle grid shown below. Two monsters are standing at vertices $B$ and $C$, respectively. Each minute, you move along an edge that takes you closer to $\overline{BC}$, choosing an edge randomly out of the two possible edges. In the same way, the monster starting at $B$ moves towards $\overline{AC}$, and the monster starting at $C$ moves towards $\overline{AB}$. If you ever encounter a monster on a vertex not on $\overline{BC}$, you die. Otherwise, if you reach $\overline{BC}$ without dying, you survive (even if you encounter a monster at some vertex on $\overline{BC}$). Compute the probability that you survive.

![Figure 1](ca2.fig1.svg)
