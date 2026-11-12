---
tag: 4RAWCTNPT8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mu$ be a countably additive measure on $(\Omega, \mathscr{F})$. Prove the following Fatou's lemma for sets:

(a) $\mu\left(\underline{\lim } A_{n}\right) \leqslant \underline{\lim } \mu\left(A_{n}\right)$;

(b) if in addition $\mu(\Omega)<\infty$, then

$$
\mu\left(\overline{\lim } A_{n}\right) \geqslant \overline{\lim } \mu\left(A_{n}\right)
$$

(c) for probability measures $\mathrm{P}$, the following inequalities hold:

$$
\mathrm{P}\left(\underline{\lim } A_{n}\right) \leqslant \underline{\lim } \mathrm{P}\left(A_{n}\right) \leqslant \overline{\lim } \mathrm{P}\left(A_{n}\right) \leqslant \mathrm{P}\left(\overline{\lim } A_{n}\right)
$$

From this, derive the following "continuity" property for the probability $\mathrm{P}$: if $A=\lim A_{n}$ (i.e., $\overline{\lim } A_{n}=\underline{\lim } A_{n}=A$), then $\mathrm{P}(A)=\lim \mathrm{P}\left(A_{n}\right)$.
