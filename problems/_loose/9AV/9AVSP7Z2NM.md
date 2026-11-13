---
tag: 9AVSP7Z2NM
kind: problem
type: answer
answer: ν!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha_1, \alpha_2, \dots, \alpha_\nu, \beta_1, \beta_2, \dots, \beta_\nu$ be $2\nu$ positive integers such that the $\nu + 1$ products

$$
\begin{align*}
\gamma_1 &= \alpha_1 \alpha_2 \alpha_3 \cdots \alpha_{\nu-1} \alpha_\nu, & \gamma_2 &= \beta_1 \alpha_2 \alpha_3 \cdots \alpha_{\nu-1} \alpha_\nu, \\
\gamma_3 &= \beta_1 \beta_2 \alpha_3 \cdots \alpha_{\nu-1} \alpha_\nu, \dots, & & \\
\gamma_\nu &= \beta_1 \beta_2 \beta_3 \cdots \beta_{\nu-1} \alpha_\nu, & \gamma_{\nu+1} &= \beta_1 \beta_2 \beta_3 \cdots \beta_\nu
\end{align*}
$$
form a strictly increasing arithmetic progression in that order. Determine the smallest positive integer that could be the common difference of such an arithmetic progression.
