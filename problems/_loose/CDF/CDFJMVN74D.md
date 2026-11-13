---
tag: CDFJMVN74D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127716
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(1) Use the Factor Theorem to prove that $a-b, b-c, c-a$ are all factors of $a^{2}(b-c)+b^{2}(c-a)+c^{2}(a-b)$.
(2) Using the conclusion from (1), factorize $a^{2}(b-c)+b^{2}(c-a)+c^{2}(a-b)$.
(3) Factorize: $(x+y+z)^{3}-x^{3}-y^{3}-z^{3}$.

(2) From (1), we know $a^{2}(b-c)+b^{2}(c-a)+c^{2}(a-b)=k(a-b)(b-c)(c-a)$. Let $a=2, b=1, c=0$, we get $k=-1$. Therefore, $a^{2}(b-c)+b^{2}(c-a)+c^{2}(a-b)=-(a-b)(b-c)(c-a)$.
(3) $3(x+y)(y+z)(z+x)$.
