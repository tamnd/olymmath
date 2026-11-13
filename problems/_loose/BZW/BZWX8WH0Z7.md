---
tag: BZWX8WH0Z7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: (1) $\tan \alpha+\tan \beta+\tan \gamma=\tan \alpha \tan \beta \tan \gamma$
$$
\begin{array}{l}
\Leftrightarrow \alpha+\beta+\gamma=n \pi \\
\Leftrightarrow \sin \alpha+\sin \beta+\sin \gamma=4 \sin \frac{\alpha+\beta}{2} \sin \frac{\beta+\gamma}{2} \sin \frac{\gamma+\alpha}{2} \\
\Leftrightarrow \sin \alpha \sin \beta \sin \gamma=\sin \alpha \cos \beta \cos \gamma+\cos \alpha \sin \beta \cos \gamma \\
+\cos \alpha \cos \beta \sin \gamma ; \\
\end{array}
$$
(2) $\cot \alpha+\cot \beta+\cot \gamma=\cot \alpha \cot \beta \cot \gamma$
$$
\begin{array}{l}
\Leftrightarrow \alpha+\beta+\gamma=n \pi+\frac{\pi}{2} \\
\Leftrightarrow \cos \alpha+\cos \beta+\cos \gamma=4 \cos \frac{\alpha+\beta}{2} \cos \frac{\beta+\gamma}{2} \cos \frac{\gamma+\alpha}{2} \\
\Leftrightarrow \cos \alpha \cos \beta \cos \gamma=\cos \alpha \sin \beta \sin \gamma+\sin \alpha \cos \beta \sin \gamma \\
+\sin \alpha \sin \beta \cos \gamma .
\end{array}
$$
