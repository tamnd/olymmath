---
tag: Y5BAQ021NZ
kind: problem
type: answer
answer: All m with v2(m−1) = 2006; equivalently m = 1 + 2^2006(2k+1), i.e., m ≡ 1 + 2^2006 (mod 2^2007).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero
    source: hf-mathnet
    label: Argentina XXII Olimpiada Iberoamericana de Matemática
---
Dado un entero positivo $m$, se define la sucesión $\{a_n\}$ de la siguiente manera:
$$
a_1 = \frac{m}{2}, a_{n+1} = a_n [a_n], \text{ si } n \ge 1.
$$
Determinar todos los valores de $m$ para los cuales $a_{2007}$ es el primer entero que aparece en la sucesión.
Nota: Para un número real $x$ se define $[x]$ como el menor entero que es mayor o igual a $x$. Por ejemplo, $[\pi] = 4$, $[2007] = 2007$.
