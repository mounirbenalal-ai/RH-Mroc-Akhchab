import google.generativeai as genai
from flask import Flask, request, jsonify
import os

# إعداد الهوية السيادية - استبدل YOUR_API_KEY بمفتاحك الحقيقي
genai.configure(api_key="YOUR_API_KEY")
model = genai.GenerativeModel('gemini-1.5-flash')

app = Flask(__name__)

@app.route('/think', methods=['POST'])
def think():
    # استقبال الأوامر من الحواس أو المستخدم
    data = request.json
    user_query = data.get('query', '')
    
    # بناء السياق السيادي لهاتف Redmi
    prompt = f"أنت المحرك الذكي لهاتف Redmi الخاص بمنير. حلل ونفذ: {user_query}"
    
    try:
        response = model.generate_content(prompt)
        return jsonify({"status": "success", "reply": response.text})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    # التشغيل كخادم داخلي محمي
    print("⚡ ذكاء Redmi نشط الآن على المنفذ 5000...")
    app.run(host='127.0.0.1', port=5000)

