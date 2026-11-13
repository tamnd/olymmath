---
tag: VAAKZWMB7V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 63rd problem: At a party, there are $\mathrm{n}(\geq 3)$ guests, some of whom know each other. It is known that for any four people $\mathrm{a}, \mathrm{~b}, \mathrm{c}, \mathrm{~d}$, it will not be the case that $(\mathrm{a}, \mathrm{b}), (\mathrm{~b}, \mathrm{c}), (\mathrm{c}, \mathrm{d}), (\mathrm{~d}, \mathrm{a})$ all know each other, while $(\mathrm{a}, \mathrm{c}), (\mathrm{~b}, \mathrm{~d})$ do not know each other.

A set of guests $\mathrm{X}$ (which can be an empty set) is called a clique if everyone in $\mathrm{X}$ knows each other; $\mathrm{X}$ is called a maximal clique if $\mathrm{X}$ is a clique, and there is no guest outside of $\mathrm{X}$ who knows everyone in $\mathrm{X}$. Prove: There are at most $\frac{\mathrm{n}(\mathrm{n}-1)}{2}$ maximal cliques at the party.
