(function () {
  // Minimal SidebarMenu implementation
})();

import React from 'react';

export interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

export interface SidebarMenuProps {
  items: MenuItem[];
  isOpen?: boolean;
  onClose?: () => void;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  isOpen = true,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        width: 300,
        background: '#fff',
        borderLeft: '1px solid #eee',
        padding: 16,
        overflow: 'auto',
      }}
    >
      <button onClick={onClose} style={{ marginBottom: 12 }}>
        Close
      </button>
      <nav>
        <ul style={{ paddingLeft: 0 }}>
          {items.map((it) => (
            <li key={it.id} style={{ listStyle: 'none', marginBottom: 8 }}>
              <div>{it.label}</div>
              {it.children && (
                <ul style={{ paddingLeft: 12 }}>
                  {it.children.map((c) => (
                    <li key={c.id} style={{ listStyle: 'none' }}>
                      {c.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarMenu;
