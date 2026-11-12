---
tag: S7J41SWQWS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Vitali Set.) Introduce on $[0,1]$ the equivalence relation

$$
x \sim y \Leftrightarrow x-y \in \mathbb{Q}.
$$

Assuming the validity of the Axiom of Choice:

"for any set $S$ there exists a choice function that assigns to each subset $B \subseteq S$ some element $b \in B$",

we select from each equivalence class a number, forming the set $\mathscr{V} \subset [0,1]$. Show that $\mathscr{V}$ does not belong to the system of Lebesgue measurable sets $\overline{\mathscr{B}}([0,1])$ (see point $1 \S 3$).
