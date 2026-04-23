/**
 * EditForm组件
 * 用户编辑表单
 * 
 * 优化说明：
 * 1. 组件化设计，提高代码复用性
 * 2. 独立管理编辑表单的UI逻辑
 */

const EditForm = ({ user, editForm, setEditForm, errors, onSave, onCancel }) => {
  return (
    <div className="edit-form">
      <div className="form-field">
        <input
          type="text"
          value={editForm.name}
          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          placeholder="Name"
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
      </div>
      <div className="form-field">
        <input
          type="text"
          value={editForm.username}
          onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
          placeholder="Username"
        />
        {errors.username && <div className="error-message">{errors.username}</div>}
      </div>
      <div className="form-field">
        <input
          type="email"
          value={editForm.email}
          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
          placeholder="Email"
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>
      <div className="form-buttons">
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditForm;