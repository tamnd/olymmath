---
tag: YAAS6A2MGX
kind: problem
type: answer
answer: \begin{pmatrix}23&\cdot&23&=&529\\+&&+&&-\\21&\cdot&21&=&441\\\hline44&+&44&=&88\end{pmatrix}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the following arrangement of characters

$$
\begin{array}{ccccc}
\mathrm{ab} & \mathrm{X} & \mathrm{ab} & = & \mathrm{cad} \\
\mathrm{Y} & & \mathrm{Y} & & \mathrm{Z} \\
\mathrm{ae} & \mathrm{X} & \mathrm{ae} & = & \mathrm{ffe} \\
\hline \mathrm{ff} & \mathrm{Y} & \mathrm{ff} & = & \mathrm{gg}
\end{array}
$$

the individual symbols should be replaced by elements of the respective base set so that true statements are formed in each case.

The base set for the lowercase letters $b, d, e$ is the set of digits from 0 to 9, for $a, c, f, g$ the set of digits from 1 to 9, and the base set for the uppercase letters $X, Y, Z$ is the set of operation symbols "+", "-", "." and ":". Identical symbols mean identical, different symbols mean different elements of the respective base set.

Determine whether such a substitution is possible, and if so, find all substitutions with the required properties!
