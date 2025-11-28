import React, { useState } from 'react';
import './SidebarMenu.module.css';

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
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="backdrop" onClick={onClose} />

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="closeButton" onClick={onClose}>
          Close
        </button>
        <nav>
          <ul className="menuList">
            {items.map((it) => (
              <li key={it.id} className="menuItem">
                <div
                  className={it.children ? 'expandable' : ''}
                  onClick={() => it.children && toggleItem(it.id)}
                >
                  {it.label}
                </div>
                {it.children && openItems[it.id] && (
                  <ul className="subMenu">
                    {it.children.map((c) => (
                      <li key={c.id}>{c.label}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SidebarMenu;
