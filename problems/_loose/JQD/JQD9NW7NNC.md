---
tag: JQD9NW7NNC
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=89
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
一場數學會議中只有 $n$ 對夫妻參加 ($n \ge 8$)，大會安排所有男士坐在一張有 $n$ 個座位的圓桌，所有女士坐另一張也是有 $n$ 個座位的圓桌。大會主辦單位發現一種人傳人的病毒正在與會者之間傳播，且其傳染途徑如下：設 $P$ 為一位健康的與會者，且其所坐位置兩側鄰居標為 $P_{\text{left}}$, $P_{\text{right}}$，其配偶標為 $P_{\text{mate}}$；只有在 $P_{\text{left}}$, $P_{\text{right}}$, $P_{\text{mate}}$ 這三人中至少有兩人感染病毒的情況下，$P$ 才會立刻被傳染而感染到病毒，否則 $P$ 會一直保持健康。設會議一開始的 $2n$ 個人中有某 $s$ 個人已經為病毒感染者，且經由病毒在與會者間不斷傳染，導致最終所有原本健康的與會者皆感到病毒。試問 $s$ 的最小值為何？
